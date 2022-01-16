import React from 'react';
import { Asset } from '../domain/asset.entity';

export type AssetProps = {
  asset: Asset;
};

export const AssetComponenet = (props: AssetProps) => {
  const { asset } = props;

  return (
    <div>
      {asset.accountName}:{asset.balanceToString()}
    </div>
  );
};
