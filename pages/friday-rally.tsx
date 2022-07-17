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
      <h1 style={{ textAlign: 'center', fontSize: 28 }}>
        Friday is even greater than we thought, at least for cryptocurrency
        investors
      </h1>
      <br />
      <div>
        <p>
          When asked how Friday differs from other days, many individuals
          respond positively. Turns out cryptocurrency investors in particular,
          have even more reasons to eagerly anticipate the beginning of leisure
          time. Let me expand on this odd assertion.
        </p>

        <br />
        <p>
          Cryptocurrency assets perform the best by a huge margin on Fridays.
          How did I come about testing and coming up with this hypothesis? The
          idea for this{' '}
          <Tooltip
            title={
              <p style={{ fontSize: 20 }}>
                Backtest refers to a hypothesis testing that is done using
                historical data
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
          strategies generally use &quot;buy and hold&quot; as a standard
          benchmark. And that makes sense. If an active trading strategy does
          not perform better than &quot;doing nothing&quot;, then simply do
          nothing. Beating buy and hold with an active trading strategy on a
          statistically significant sample size is very hard because of trading
          fees. Every week, our &quot;buy on Friday, sell on Saturday&quot;
          strategy loses 0.2% in trading fees (0.1% on both buy and sell). The
          probability of overcoming this severe handicap by just picking a
          random strategy is very low.
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
        <h3>Strategy</h3>
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
          0.2% per week with a strategy that is this simple? Well I certainly
          wouldn&apos;t blame you for thinking so.
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
        Friday is overwhelmingly the best day to be invested in ETH. It&apos;s
        the best day by many orders of magnitude. Average day (Friday included)
        of holding ETH has generated on average 0.06% of profit. Holding ETH for
        24 hours from Friday to Saturday has generated on average 0.69% of
        profit <span style={{ fontWeight: 'bold' }}>after</span> trading fees.
        These results are staggeringly significant.
      </p>
      <br />

      <p>
        I am not speculating here, I am just interpreting the data. Buy and hold
        strategy has CAGR of 23.6% while &quot;buy friday, sell saturday&quot;
        strategy has CAGR of 28.4%. The &quot;buy friday, sell saturday&quot;
        strategy <span style={{ fontWeight: 700 }}>beats</span> buy and hold
        after fees while carrying significantly less risk and max drawdown being
        a lot less.
      </p>
      <br />
      <p>
        Not only does the strategy straight out beat the benchmark, it allows
        the 6/7 of the time (when we don&apos;t have a position) to generate
        more profit by deploying capital to other strategies. It is fair to call
        these results interesting.
      </p>
      <br />

      <h3>Anomaly</h3>
      <br />
      <p>
        How could a strategy that uses time as a sole criteria for both entry
        and exit beat buy and hold on a 5 year sample size while paying a lot of
        fees? I don&apos;t know. There are a lot variables that affect financial
        asset prices, and financial markets are chaotic. There are many
        attractive, plausible, and easy-to-come up with explanations. What is
        extremely surprising is that the seasonality is so strong that it beats
        buy and hold after trading fees.
      </p>
      <br />
      <p>
        Cryptocurrency markets are not unique for having seasonality.{' '}
        <a
          href="https://www.investopedia.com/terms/s/santaclauseffect.asp"
          target={'_blank'}
          rel="noreferrer"
        >
          Santa claus rally
        </a>{' '}
        is an anomaly that has rewarded stock market investors, as you may
        guess, during the Christmas season. However, because cryptocurrency
        markets are generally a lot more unmature, Christmas may arrive 52 times
        more frequently on the cryptomarkets.
      </p>
      <br />
      <p>
        I did this backtest purely for entertainment value, and I have not made
        bets using the results of this backtest, and I recommend the same to
        you.
      </p>

      <br />
      <h3>
        You don&apos;t believe everything that is written on the internet?
      </h3>
      <br />
      <p>
        You can do the same backtest (or some other) for yourself,
        <a
          href="https://www.binance.com/en/landing/data"
          target={'_blank'}
          rel="noreferrer"
        >
          {' '}
          here&apos;s{' '}
        </a>
        Binance&apos;s massive library of market data.
      </p>
    </div>
  )
}
export default FridayOutperform
