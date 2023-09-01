import React from 'react';
//import { Link } from 'react-router-dom';
import './Timeline.css';

function Timeline() {
  return (
    <div>

      
            <div className="timeline-container">
                <div className="timeline-checkpoint">
                    <div className="timeline-content">
                        <span className="circle active">1</span>
                        <span className="secondary-color">Owner Details</span>
                    
                    </div>
                    <span className="line false"></span>
                </div>
                <div className="timeline-checkpoint">
                    <div className="timeline-content"><span class="circle false">2</span> <span className="secondary-color">Owner Address</span> </div>
                    <span className="line false"></span>
                </div>
                <div className="timeline-checkpoint">
                    <div className="timeline-content">
                        <span className="circle false">3</span>
                        <span className="secondary-color">Pet Details</span>
                    </div>
                    <span className="line false"></span>
                </div>
                <div className="timeline-checkpoint">
                    <div className="timeline-content">
                        <span className="circle false">4</span>
                        <span className="secondary-color">Document Details</span>
                    </div>
                    <span className="line false"></span>
                </div>
                <div className="timeline-checkpoint">
                    <div className="timeline-content">
                        <span className="circle false">5</span>
                        <span className="secondary-color">Summary</span>
                    </div>
                
                </div>
            </div>





    </div>
  );
}

export default Timeline;