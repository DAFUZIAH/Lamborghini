import React from 'react'

function Meta() {
  return (
    <div className="meta">
        <h2 className="meta-title">
            SPECIFICATIONS
        </h2>
        <div className="meta-inner">
            <div className="meta-wrapper">
                <li className="meta-specs-title">DISPLACEMENT</li>
                <li className="meta-specs-content">6.498cm3</li>
            </div>
            <div className="meta-wrapper">
                <li className="meta-specs-title">MAX. POWER</li>
                <li className="meta-specs-content">740CV at 800rpm</li>
            </div>
            <div className="meta-wrapper">
                <li className="meta-specs-title">TOP SPEED</li>
                <li className="meta-specs-content">350km/h</li>
            </div>
            <div className="meta-wrapper">
                <li className="meta-specs-title">0-100KM/H</li>
                <li className="meta-specs-content">2.9s</li>
            </div>
        </div>
    </div>
  )
}

export default Meta