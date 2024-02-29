'use client'
import React from 'react'
import { memo } from 'react'
import { useEffect, useRef } from 'react';
import { Suspense } from 'react';

const MiniChart = async ({ symbol }) => {
  const ref = useRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = `{
        "symbol": "${symbol}",
        "width": 262,
        "height": 160,
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "light",
        "isTransparent": false,
        "autosize": false,
        "largeChartUrl": ""
        }`;
    ref.current.appendChild(script);
  }, []);

  return (
    <div className=" bg-white overflow-hidden  rounded-xl border">
        <div className="tradingview-widget-container" ref={ref}>
      
          <div className="tradingview-widget-container__widget"></div>
 
        </div>
    </div>
  )
}

export default memo(MiniChart); 