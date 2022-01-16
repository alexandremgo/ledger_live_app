import React, { useEffect, useState } from 'react';
import { Asset } from '../domain/asset.entity';
import './AssetComponent.css';
import { Range } from 'react-range';

export type AssetProps = {
  asset: Asset;
};

export const AssetComponenet = (props: AssetProps) => {
  const { asset } = props;
  const [annualGrowth, setAnnualGrowth] = useState([0]);

  useEffect(() => {
    if (annualGrowth.length > 0) {
      asset.computeEvolution(annualGrowth[0]);
    }
  }, [annualGrowth]);

  return (
    <div className="Asset">
      <div className="balance">
        {asset.accountName}:{asset.valueToString()}
      </div>
      <div className="RangeBox">
        {annualGrowth}% in a year
        <Range
          step={0.1}
          min={-100}
          max={500}
          values={annualGrowth}
          onChange={setAnnualGrowth}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '3px',
                width: '100%',
                backgroundColor: '#ccc',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '10px',
                width: '10px',
                backgroundColor: '#999',
              }}
            />
          )}
        />
      </div>
      Day 1: {asset.evolutionAtADayToString(1)} | Day 10: {asset.evolutionAtADayToString(10)} | Day
      100: {asset.evolutionAtADayToString(100)} | Day 365: {asset.evolutionAtADayToString(365)}
    </div>
  );
};
