import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import '../styles/StepBar.scss'
const StepBar = ({ stepData }) => {
  const [targetState, setTargetState] = useState(1)
  const [currentState, setCurrentState] = useState(0)    // 1 ~ 5
  
  useEffect(() => {
    setCurrentState(1)
    if (stepData[2].time) setTargetState(5)
    else if (stepData[1].time) setTargetState(4)
    else if (stepData[0].time) setTargetState(2)
  }, [stepData])

  useEffect(() => {
    if(currentState < targetState) setTimeout(() => {
      setCurrentState(currentState + 1)
    }, 800)
  }, [currentState, targetState])

  return (
    <div className="stepBar">
      <div className="progress">
        <div className="progress_inner">
          <div className="progress_inner__step">
            <label htmlFor="step-1">Already paid</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-2">Bliss tailoring</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-3">Shipped</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-4">On the way</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-5">Bliss received</label>
          </div>
          <input type="radio" name="step" id="step-1" checked={currentState === 1} readOnly />
          <input type="radio" name="step" id="step-2" checked={currentState === 2} readOnly />
          <input type="radio" name="step" id="step-3" checked={currentState === 3} readOnly />
          <input type="radio" name="step" id="step-4" checked={currentState === 4} readOnly />
          <input type="radio" name="step" id="step-5" checked={currentState === 5} readOnly />
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
