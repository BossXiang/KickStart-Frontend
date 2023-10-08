import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import '../styles/StepBar.scss'
const StepBar = ({ stepData }) => {
  const [targetState, setTargetState] = useState(1)
  const [currentState, setCurrentState] = useState(0) // 1 ~ 5
  const [hoverStep1, sethoverStep1] = useState(false)
  const [hoverStep3, sethoverStep3] = useState(false)
  const [hoverStep5, sethoverStep5] = useState(false)

  useEffect(() => {
    setCurrentState(1)
    if (stepData[2].time) setTargetState(5)
    else if (stepData[1].time) setTargetState(4)
    else if (stepData[0].time) setTargetState(2)
  }, [stepData])

  useEffect(() => {
    if (currentState < targetState)
      setTimeout(() => {
        setCurrentState(currentState + 1)
      }, 800)
  }, [currentState, targetState])

  const transDate = (timeStamp) => {
    const myDate = new Date(timeStamp)
    const year = myDate.getFullYear()
    const month = myDate.getMonth() + 1
    const day = myDate.getDate()
    const hours = myDate.getHours()
    const minutes = myDate.getMinutes()
    const seconds = myDate.getSeconds()
    const normalDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    return normalDate
  }

  const handleHover1 = () => {
    sethoverStep1(true)
  }

  const handleMouseLeave1 = () => {
    sethoverStep1(false)
  }
  const handleHover3 = () => {
    sethoverStep3(true)
  }

  const handleMouseLeave3 = () => {
    sethoverStep3(false)
  }
  const handleHover5 = () => {
    sethoverStep5(true)
  }

  const handleMouseLeave5 = () => {
    sethoverStep5(false)
  }

  return (
    <div className="stepBar">
      <div className="progress">
        <div className="progress_inner">
          <div
            className="progress_inner__step"
            onMouseEnter={handleHover1}
            onMouseLeave={handleMouseLeave1}>
            {hoverStep1 && stepData[0].time ? (
              <label className="dateData">{transDate(stepData[0].time)}</label>
            ) : (
              <label>Already paid</label>
            )}
          </div>
          <div className="progress_inner__step">
            <label>Bliss tailoring</label>
          </div>
          <div
            className="progress_inner__step"
            onMouseEnter={handleHover3}
            onMouseLeave={handleMouseLeave3}>
            {hoverStep3 && stepData[1].time ? (
              <label className="dateData">{transDate(stepData[1].time)}</label>
            ) : (
              <label>Shipped</label>
            )}
          </div>
          <div className="progress_inner__step">
            <label>On the way</label>
          </div>
          <div
            className="progress_inner__step"
            onMouseEnter={handleHover5}
            onMouseLeave={handleMouseLeave5}>
            {hoverStep5 && stepData[2].time ? (
              <label className="dateData">{transDate(stepData[1].time)}</label>
            ) : (
              <label>Bliss received</label>
            )}
          </div>
          <input
            type="radio"
            name="step"
            id="step-1"
            checked={currentState === 1}
            readOnly
          />
          <input
            type="radio"
            name="step"
            id="step-2"
            checked={currentState === 2}
            readOnly
          />
          <input
            type="radio"
            name="step"
            id="step-3"
            checked={currentState === 3}
            readOnly
          />
          <input
            type="radio"
            name="step"
            id="step-4"
            checked={currentState === 4}
            readOnly
          />
          <input
            type="radio"
            name="step"
            id="step-5"
            checked={currentState === 5}
            readOnly
          />
          <div className="progress_inner__bar"></div>
          <div className="progress_inner__bar--set"></div>
          <div className="progress_inner__tabs">{/* 这里放置 tab 内容 */}</div>
          <div className="progress_inner__status">
            <div className="box_base"></div>
            <div className="box_lid"></div>
            <div className="box_ribbon"></div>
            <div className="box_bow">
              <div className="box_bow__left"></div>
              <div className="box_bow__right"></div>
            </div>
            <div className="box_item"></div>
            <div className="box_tag"></div>
            <div className="box_string"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default StepBar
