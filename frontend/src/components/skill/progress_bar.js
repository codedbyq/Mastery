import React from 'react';

const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    // height: 10,
    // width: '150px',
    // backgroundColor: "#e0e0de",
    // borderRadius: 50,
    // margin: 5,
  }

  const fillerStyles = {
    // transition: 'width 1s ease-in-out',
    // height: '100%',
    // borderRadius: 50,
    width: `${Math.ceil(completed)}%`,
    // backgroundColor: '#00695c',
    // borderRadius: 'inherit',
    // textAlign: 'right'
  }

  const labelStyles = {
    // display: 'none',
    // color: 'white',
    // fontWeight: 'bold',
    // fontSize: '10px'
  }

  return (
    <div className="progress-container" style={containerStyles}>
      <div className="filler-label-container">
        <span className="filler-label" style={labelStyles}>{`${completed.toFixed(1)}%`}</span>
      </div>
      <div className="filler" style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;