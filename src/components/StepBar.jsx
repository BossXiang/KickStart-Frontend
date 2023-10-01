import React from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import '../styles/StepBar.scss'
const StepBar = ({ stepData }) => {
  return (
    <div className="stepBar">
      <div className="progress">
        <div className="progress_inner">
          <div className="progress_inner__step">
            <label htmlFor="step-1">Start order</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-2">Prepare gift</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-3">Pack gift</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-4">Decorate box</label>
          </div>
          <div className="progress_inner__step">
            <label htmlFor="step-5">Send gift</label>
          </div>
          <input type="radio" name="step" id="step-1" checked />
          <input type="radio" name="step" id="step-2" />
          <input type="radio" name="step" id="step-3" />
          <input type="radio" name="step" id="step-4" />
          <input type="radio" name="step" id="step-5" />
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
