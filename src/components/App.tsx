import React, { useEffect, useState } from 'react';
import './App.css';
import { AssetComponenet } from './AssetComponent';
import { Asset } from '../domain/asset.entity';
import { assetRepository } from '../repositories/asset-repository';

export type AppProps = {
  teardown: () => void;
};

const App = (props: AppProps) => {
  const { teardown } = props;
  const [assets, setAssets] = useState<Asset[]>([]);

  // Instantiate the Ledger Live API on component mount
  useEffect(() => {
    // Gets all the assets added by user on LedgerLive
    const fetchAssets = async () => {
      try {
        const assets = await assetRepository().getAll();
        setAssets(assets);
        console.log({ assets });
      } catch (error) {
        console.error({ error });
      }
    };
    fetchAssets();

    // Cleanups on component unmount
    return () => {
      teardown();
    };
  }, [teardown]);

  return (
    <div className="App">
      {assets.map((asset) => (
        <AssetComponenet asset={asset} key={asset.id}></AssetComponenet>
      ))}
    </div>
  );
};

export default App;
