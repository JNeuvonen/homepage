import { Tooltip } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ethGraph from '../assets/images/image_2022_07_16T14_34_03_871Z.png'
const FridayOutperform = () => {
  const generatePerformanceMetris = (
    header: string | JSX.Element,
    value: string
  ) => {
    return (
      <div
        className="flex-box space-between flex-wrap"
        style={{ maxWidth: 500, width: '100%', columnGap: '20px' }}
      >
        <div style={{ fontWeight: 700 }}>{header}</div>
        <div>{value}</div>
      </div>
    )
  }
  return (
    <div style={{ fontSize: 24 }}>
      <h1 style={{ textAlign: 'center' }}>
        If you plan on buying cryptocurrency, Friday is the best time to do it
      </h1>
      <br />
      <div>
        <p>
          Let&apos;s explore the quite interesting statement that is posed in
          this blog post&apos;s title. I assume quite a narrow demographic will
          find this blog post interesting, but those who do will probably find
          it hilarious. Cryptocurrency prices indeed perform the best on Fridays
          in a way that is statistically significant.
        </p>

        <br />
        <p>
          How is it possible that Fridays are the best time to be invested in
          crypto? I don&apos;t know. I will attempt to reason the why part
          later. How did I come about testing and coming up with this
          hypothesis? The idea for this{' '}
          <Tooltip
            title={
              <p>
                Backtest refers to a hypothesis testing that is done using
                historical data.
              </p>
            }
          >
            <span style={{ textDecoration: 'underline' }}>backtest</span>
          </Tooltip>{' '}
          came from the anecdotical experience that cryptocurrencies seem to
          perform quite well on Fridays. Cryptocurrency exhange Binance also
          happens to offer historical price data on a massive scale for free, so
          this hunch was easy to put on a test with a rather straightforward
          Python script.
        </p>

        <br />

        <h3>The type of data used</h3>

        <br />

        <p>
          I used Binance minute by minute data (timeseries) since Sept 2017 to
          June 2022 on Ethereum. Every row of data contains timestamp, open
          price, high price, low price and closing prices for that one minute
          candle. We are only interested in timestamp and either open or close.
          We just have a price update on a regular time interval and that is
          enough here.
        </p>
        <br />
        <h3>Fair benchmark</h3>

        <br />

        <p>
          To understand our results, we also need a benchmark. Active trading
          strategies often use &quot;buy and hold&quot; as a standard benchmark.
          And that makes sense. If an active trading strategy does not
          outperform &quot;doing nothing&quot;, then simply do nothing. Beating
          buy and hold on a statistically significant sample size is very hard
          because of trading fees. Every week, our &quot;buy on Friday, sell on
          Saturday &quot; strategy loses 0.2% in trading fees (0.1% on both buy
          and sell). The probability of overcoming this severe handicap by just
          picking a random strategy is very low. This is true, at least if the
          asset price has an upward bias.
        </p>
        <br />
        <h3>Enter trade criteria (buy ETH)</h3>
        <br />
        <p>
          If we have no ETH position and time is later than 11:59:59 EET (UTC +
          2) on Friday, buy on candle open price with 100% of available
          liquidity.
        </p>

        <br />
        <h3>Exit trade criteria (sell ETH)</h3>
        <br />
        <p>
          If we have a position and time is later than 11:59:59 EET (UTC + 2) on
          Saturday, sell on candle open price with 100% of available ETH.
        </p>
        <br />
        <p>
          The trading &quot;strategy&quot; is as simple as it possibly gets. I
          am putting strategy in quotes here since it is bold to call this a
          strategy to begin with. We are buying and selling solely based on the
          time of the day and nothing else.
        </p>
        <br />
        <p>
          You would think it would be incredibly hard to beat the handicap of
          0.2% per week on an asset that has a massive upward bias with a
          strategy that is this simple? Yes, that would be a very rational line
          of thought.
        </p>
        <br />
        <h3>Strategy graph</h3>
        <br />
        <Image src={ethGraph} alt="ETH Graph"></Image>
        <br />
        <br />
        <div>{generatePerformanceMetris('Starting capital', '$100000')}</div>
        <div>{generatePerformanceMetris('Ending capital', '$559991')}</div>
        <div>
          {generatePerformanceMetris(
            'Total holding time (vs benchmark)',
            '1/7'
          )}
        </div>
        <div>{generatePerformanceMetris('ETH starting price', '$384.79')}</div>
        <div>{generatePerformanceMetris('ETH ending price', '$1070.82')}</div>
        <div>
          {generatePerformanceMetris(
            <Tooltip
              title={
                <p style={{ fontSize: 20 }}>Compound annual growth rate</p>
              }
            >
              <p>
                Buy and hold{' '}
                <span style={{ textDecoration: 'underline' }}>CAGR</span>
              </p>
            </Tooltip>,
            '23.6%'
          )}
        </div>

        <div>
          {generatePerformanceMetris(
            <Tooltip
              title={
                <p style={{ fontSize: 20 }}>Compound annual growth rate</p>
              }
            >
              <p>
                Strategy{' '}
                <span style={{ textDecoration: 'underline' }}>CAGR</span>
              </p>
            </Tooltip>,
            '28.4%'
          )}
        </div>

        <div>
          {generatePerformanceMetris(
            <Tooltip
              title={
                <p style={{ fontSize: 20 }}>
                  Average profit for one day of buy and hold
                </p>
              }
            >
              <p>
                <span style={{ textDecoration: 'underline' }}>
                  Buy and hold daily compound rate
                </span>
              </p>
            </Tooltip>,
            '0.06%'
          )}
        </div>
        <div>
          {generatePerformanceMetris(
            <Tooltip
              title={
                <p style={{ fontSize: 20 }}>
                  Average profit of one day of backtested strategy
                </p>
              }
            >
              <p>
                <span style={{ textDecoration: 'underline' }}>
                  Strategy daily compound rate
                </span>
              </p>
            </Tooltip>,
            '0.69%'
          )}
        </div>
        <div>{generatePerformanceMetris('Total trades', '252')}</div>
        <div>{generatePerformanceMetris('Strategy fees paid', '$132497')}</div>
        <div>
          {generatePerformanceMetris(
            <Tooltip
              title={
                <p style={{ fontSize: 20 }}>
                  Maximum percentual loss that occured to the strategy
                </p>
              }
            >
              <p>
                <span style={{ textDecoration: 'underline' }}>
                  Strategy max drawdown
                </span>
              </p>
            </Tooltip>,
            '49.8%'
          )}
        </div>
        <div>
          {generatePerformanceMetris(
            <Tooltip
              title={
                <p style={{ fontSize: 20 }}>
                  Maximum percentual loss that occured to buy and hold
                </p>
              }
            >
              <p>
                <span style={{ textDecoration: 'underline' }}>
                  Buy and hold max drawdown
                </span>
              </p>
            </Tooltip>,
            '94.3%'
          )}
        </div>
        <div>
          {generatePerformanceMetris(
            <Tooltip
              title={
                <p style={{ fontSize: 20 }}>
                  [Total wins - total losses], the higher the better, read more
                  from{' '}
                  <a
                    href="https://www.quantifiedstrategies.com/profit-factor/"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    here
                  </a>
                </p>
              }
            >
              <p>
                <span style={{ textDecoration: 'underline' }}>
                  Profit factor
                </span>
              </p>
            </Tooltip>,
            '1.25'
          )}
        </div>
      </div>
      <br />
      <h3>Interpreting the results</h3>
      <br />
      <p>
        Before the backtest, I had a small hunch that Friday, for no apparent
        reason, probably performed slightly better than other days. It turns out
        Friday is overwhelmingly the best day to buy ETH. It&apos;s the best day
        to buy by many orders of magnitude, even after trading fees.
      </p>
      <br />

      <p>
        I am not speculating here, I am just interpreting the data. The
        &quot;buy friday, sell saturday&quot; strategy{' '}
        <span style={{ fontWeight: 700 }}>beats</span> buy and hold after fees
        while carrying significantly less risk (having position 1/7 of time as
        opposed to all the time) and max drawdown being a lot less.
      </p>
      <br />
      <p>
        Not only does the strategy straight out beat the benchmark, it allows
        the 6/7 of the time (when we don&apos;t have a position) to generate
        more profit by deploying capital to other strategies. I am not being
        brave now when I say this is statistically significant.
      </p>
      <br />
      <br />
      <h3>Why?</h3>
    </div>
  )
}
export default FridayOutperform
