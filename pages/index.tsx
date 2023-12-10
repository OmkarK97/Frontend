import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../styles/Home.module.css';
import { Inter } from 'next/font/google';
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import abi from './deposit.json';
import { useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  const [depositAmount, setDepositAmount] = useState('');
  // const [withdrawAmount, setWithdrawAmount] = useState('');

  const { write } = useContractWrite({
    address: '0x5a06ADDad77c662f24af3BdB455dE0064aacaaDC',
    abi: abi,
    functionName: 'deposit',
  });

  // const { config: func2 } = usePrepareContractWrite({
  //   address: '0xD9B059aA3c2D94ddb0cE361296F5c8922e7ef445',
  //   abi: abi,
  //   functionName: 'withdraw',
  //   args: [parseInt(withdrawAmount)],
  // });
  // const { write: funct } = useContractWrite(func2);

  // const [isInputVisible, setInputVisible] = useState(false);

  // const handleDeposit = () => {
  //   setInputVisible(false);
  //   document.body.style.overflow = 'hidden';
  // };

  // const handleConfirmDeposit = async () => {
  //   const depositValue = parseFloat(depositAmount);

  //   if (!isNaN(depositValue) && depositValue > 0) {
  //     try {
  //       await write({ args: [10000000, '0x0f5EE73E820987E337810667A458Fcc0A00957E6']});
  //       setDepositAmount('');
  //       setInputVisible(false);
  //       document.body.style.overflow = 'auto';
  //     } catch (error) {
  //       console.error('Error in deposit:', error);
  //       // Handle error as needed
  //     }
  //   } else {
  //     alert('Minimum amount should be greater than 0');
  //   }
  // };

  // const handleConfirmWithdraw = () => {
  //   const withdrawValue = parseFloat(withdrawAmount);

  //   if (!isNaN(withdrawValue) && withdrawValue > 0) {
  //     funct?.();

  //     setWithdrawAmount('');
  //     setInputVisible(false);
  //     document.body.style.overflow = 'auto';
  //   } else {
  //     alert('Minimum amount should be greater than 0');
  //   }
  // };

  return (
    <div className={inter.className}>
      <div className={styles.logo}></div>
      <div className={styles.tags}>
        <a href="">Liquidity Manger</a>
        <a href="">Liquidity Pools</a>
        <a href="">Cross-Chain Pools</a>
        <a href="">About Us </a>
        <a href="">Let's Talk</a>
      </div>

      <div className={styles.main}>
        <ConnectButton />
      </div>

      <div className={styles.big_box}>
        <div className={styles.hero_section}>
          <div className={styles.paragraph}>
            <p className={styles.first_para}>Liquidity Management Vault</p>
            <div className={styles.second}>
              <p className={styles.sec_para}>Earn passive yield with active market-making stratergies.</p>
            </div>
          </div>
          <div>
            <img className={styles.image} src="https://app.rivera.money/static/media/rocket.3cedc5f6ab4956e7aa56.png" alt="rocket" />
          </div>

          <div className={styles.tvl}>
            <div className={styles.round_tvl}>
              <img className={styles.tvl_logo} src='https://app.rivera.money/static/media/tvlv2.a1a1739d28775a65fb3cde0bc1b527b7.svg' />
            </div>
            <p className={styles.tvl_a}>TVL</p>
            <p className={styles.dollar}>$103.5K</p>
          </div>

          <div className={styles.vaults}>
            <div className={styles.round_vault}>
              <img
                className={styles.vault_logo}
                src="https://app.rivera.money/static/media/keyCircle2.4672f6eed57c0faebd1e6a28cc24e24c.svg"
              />
            </div>
            <p className={styles.vault}>Vaults</p>
            <p className={styles.num_vault}>12</p>
          </div>

          <div className={styles.automations}>
            <div className={styles.round_automations}>
              <img
                className={styles.automation_logo}
                src="https://app.rivera.money/static/media/seetingCircle2.7a547f80063aaeff267cc6e261a49d3b.svg"
              />
            </div>
            <p className={styles.automation}>Automations</p>
            <p className={styles.num_automations}>463</p>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.LQ_Pool1}>
          <img className={styles.lp1_bg} />
          <div className={styles.lp1_header}>
            <img className={styles.usdc} src='https://app.rivera.money/img/usdc.svg' />
            <img className={styles.usdt} src='https://app.rivera.money/img/usdt.svg' />
            <p className={styles.par1}>USDC-USDT-Z Vault</p>
            <p className={styles.par2}>Uniswap</p>
            <p className={styles.par3}>Fee Tier</p>
            <p className={styles.par4}>0.01%</p>
            <p className={styles.par5}>9.5</p>
            <img
              className={styles.range}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgB3ZCxCQAgDASjZDhXsHURdRFbV3A7FUFQDCSk9KoncHDEgJBQXdwbpZIBSHtbUIBcSvEti6QzZfJIujwuhZS4FApV3o8S9vt7C+42AIzpEPpZad+SAAAAAElFTkSuQmCC"
            />
          </div>
          <img className={styles.corner_logo} src="https://app.rivera.money/img/mantaLogo.png" />

        </div>

        <div className={styles.trading_logic1}>
          <p className={styles.trading_logic1_p}>Static Range</p>
          <img className={styles.trading_logic1_img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANxSURBVHgBfVR7TFNnFD/n3tsHpSrpRtt0roPIZMtAMhjZxjacYWRq9sfm3JgWXQhzIcuyodmiMcviFhOdiVP3CG48Fob1kagRotRXSDQ2kqARVBRFUVpUehVFsNgW7nc8xbQJBnqS797znXPu75zvd879EBII1cBLgNDCqoAgzMPvoG+qWCkREINs5dXJqxtMsD5x6FTVVION0/SDBlm81bHeBhGw4jfwYLJ4Jfq4Yy5LlWHscwBNlgg7b76SfBKkf3PZdRu/5oqiwHVwH4xQCLeajima4Q0BIjtqN8impscvzPUrT9HGdhMwHyCrGlCO88qIv2Nn8YitqOMygDqesQNmX95sXbJaFvpNgoQdEK8xvCGijXzE7gXjHBFRCJH2Wx81FBBiOuubewZsqS3bFxeczazYrviPbHj7uf8Kz4VedWgS/SEi9KJwzs9DIi8DUvx8d02luYFkV0hNci2O2UZrZe/GvypGUi410bv76qmp8pN7ohr2x/yy31Mu+zwR8DXPmkC2mlz6PSD9JgjL0i66TuccHWy/kTF9bCADV93JciutM5LX9VgkreRqaN7M7i8K+JM6IlwpnB9WxcmOijW4YxuDGT3FM92jMjxMl/pm1FyvXtS4puyHLQ6n4auSXRvgTNbfvy8s7OSp0jMdlSJtftWErsXEcakUCEms3dIuvX7NC/b8R4ZpKSmDTKReOAnrZhXhobmZkT0rjhvf9/abn4dJ5ki56fmRJPiJ1Yq+OfWn92YmnZsdwOFcNfKro6tUMXbp1qf5Hg5eKEr6IJDdkIsg7WMaVtqDDVvjaDrf8Xy5t3lUvtVcErOJWvC6V7mG8g82kOViI/2yqTLIDTgY59S89LNogwbMX74Wr4jZ93APe4VzQYXJd8ARQv2nOa0P1nQpaaZw3lBVW3GjpTOMS6alDA+9cxV+Fpo4YQ/v7FHNy7YBiZetQffCOEcSwXvg97SHBaTztj/b0NX7v7ounO3sXpsXnf6N1ozA0RwLyrbVEkp/qrpl5wnIhoDX42RrEC6XJOMioWkERv1ZsBe31tfAx/x//RNLZE9V59iXHluOLXB4YLrrLU2DNxFxLKiT3RPIflb4CrGwN8BZ8kEeT9gGw2DHSrZNIlMCjYPVwl5+mYAYCKEfy2H5VLFKIiA+2rdc0SkGGWWwFYlCnwBTmFrHEaSVrgAAAABJRU5ErkJggg==" />
        </div>

        <div className={styles.trading_logic2}>
          <p className={styles.trading_logic2_p}>Stable Pair</p>
          <img className={styles.trading_logic2_img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANxSURBVHgBfVR7TFNnFD/n3tsHpSrpRtt0roPIZMtAMhjZxjacYWRq9sfm3JgWXQhzIcuyodmiMcviFhOdiVP3CG48Fob1kagRotRXSDQ2kqARVBRFUVpUehVFsNgW7nc8xbQJBnqS797znXPu75zvd879EBII1cBLgNDCqoAgzMPvoG+qWCkREINs5dXJqxtMsD5x6FTVVION0/SDBlm81bHeBhGw4jfwYLJ4Jfq4Yy5LlWHscwBNlgg7b76SfBKkf3PZdRu/5oqiwHVwH4xQCLeajima4Q0BIjtqN8impscvzPUrT9HGdhMwHyCrGlCO88qIv2Nn8YitqOMygDqesQNmX95sXbJaFvpNgoQdEK8xvCGijXzE7gXjHBFRCJH2Wx81FBBiOuubewZsqS3bFxeczazYrviPbHj7uf8Kz4VedWgS/SEi9KJwzs9DIi8DUvx8d02luYFkV0hNci2O2UZrZe/GvypGUi410bv76qmp8pN7ohr2x/yy31Mu+zwR8DXPmkC2mlz6PSD9JgjL0i66TuccHWy/kTF9bCADV93JciutM5LX9VgkreRqaN7M7i8K+JM6IlwpnB9WxcmOijW4YxuDGT3FM92jMjxMl/pm1FyvXtS4puyHLQ6n4auSXRvgTNbfvy8s7OSp0jMdlSJtftWErsXEcakUCEms3dIuvX7NC/b8R4ZpKSmDTKReOAnrZhXhobmZkT0rjhvf9/abn4dJ5ki56fmRJPiJ1Yq+OfWn92YmnZsdwOFcNfKro6tUMXbp1qf5Hg5eKEr6IJDdkIsg7WMaVtqDDVvjaDrf8Xy5t3lUvtVcErOJWvC6V7mG8g82kOViI/2yqTLIDTgY59S89LNogwbMX74Wr4jZ93APe4VzQYXJd8ARQv2nOa0P1nQpaaZw3lBVW3GjpTOMS6alDA+9cxV+Fpo4YQ/v7FHNy7YBiZetQffCOEcSwXvg97SHBaTztj/b0NX7v7ounO3sXpsXnf6N1ozA0RwLyrbVEkp/qrpl5wnIhoDX42RrEC6XJOMioWkERv1ZsBe31tfAx/x//RNLZE9V59iXHluOLXB4YLrrLU2DNxFxLKiT3RPIflb4CrGwN8BZ8kEeT9gGw2DHSrZNIlMCjYPVwl5+mYAYCKEfy2H5VLFKIiA+2rdc0SkGGWWwFYlCnwBTmFrHEaSVrgAAAABJRU5ErkJggg==" />
        </div>

        <div className={styles.tvl_card}>
          <p className={styles.tvl_card_p}>TVL</p>
        </div>
        <div className={styles.tvl_money}>
          <p className={styles.tvl_money_p}>51.8k USDT</p>
        </div>
        <div className={styles.progressbar_1}></div>
        <div className={styles.progressbar_fill}></div>
        <p className={styles.balance}>300K USDT</p>
        <p className={styles.lp_apr}>LP APR</p>
        <p className={styles.lp_apr_percent}>0.13%</p>

        <button className={styles.deposit} onClick={() => write({
          args: [
            0x0f5EE73E820987E337810667A458Fcc0A00957E6
          ],
        })}>
          Deposit
        </button>

        {/* {isInputVisible && (
          <div className={styles.blurBackground}>
            <div className={styles.centeredInput}>
              <input className={styles.input_deposit}
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                placeholder="Enter deposit amount"
              />
              <button className={styles.input_deposit_btn} onClick={handleConfirmDeposit}>Confirm Deposit</button>
            </div>
          </div>
        )}


        <button className={styles.withdraw} onClick={handleDeposit}>Withdraw</button> */}

        {/* {isInputVisible && (
          <div className={styles.blurBackground}>
            <div className={styles.centeredInput}>
              <input className={styles.input_deposit}
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                placeholder="Enter withdraw amount"
              />
              <button className={styles.input_deposit_btn} onClick={handleConfirmWithdraw}>Confirm Withdraw</button>
            </div>
          </div>
        )} */}

        <img className={styles.base_logo1} src='https://app.rivera.money/img/aperture.svg' />
        <div><p className={styles.stable}>Stable Spread Stratergy</p></div>
      </div>

      <div>
        <div className={styles.LQ_Pool2}>
          <img className={styles.lp2_bg} />
          <div className={styles.lp2_header}>
            <img className={styles.weth} src='https://app.rivera.money/img/eth.png' />
            <img className={styles.usdt_y} src='https://app.rivera.money/img/usdt.svg' />
            <p className={styles.par6}>
              WETH-USDT-Y Vault</p>
            <p className={styles.par7}>UniSwap</p>
            <p className={styles.par8}>Fee Tier</p>
            <p className={styles.par9}>0.05%</p>
            <p className={styles.par0}>8.0</p>
            <img
              className={styles.range}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgB3ZCxCQAgDASjZDhXsHURdRFbV3A7FUFQDCSk9KoncHDEgJBQXdwbpZIBSHtbUIBcSvEti6QzZfJIujwuhZS4FApV3o8S9vt7C+42AIzpEPpZad+SAAAAAElFTkSuQmCC"
            />
          </div>
          <img className={styles.corner_logo} src="https://app.rivera.money/img/mantaLogo.png" />

        </div>

        <div className={styles.trading_logic3}>
          <p className={styles.trading_logic3_p}>Static Range</p>
          <img className={styles.trading_logic3_img} src="https://app.rivera.money/static/media/alm.a73f749d6995fffc2711cf210034e9cd.svg" />
        </div>

        <div className={styles.trading_logic4}>
          <p className={styles.trading_logic4_p}>Stable Pair</p>
          <img className={styles.trading_logic4_img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAXCAYAAAD3CERpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM2SURBVHgB7ZRbSBRRGMe/c85sM5K12kWTwjYi7AYZbtHtoStBRUVhKiEWJSi9SD1UmreHJFCixDLCS2KFIJokCUGKoZHRmtSDQiiuSire1lu6uzNzTjOTK+vq7kpiD9H/Zc585zvn953/uQD81yIKeUuQm40JGJMwtU0Z+52PfD6Qze9z4Q/FeepkvXEBzNJ4j1GJd66QgdTlnHezKc5ACC7ypUJsYuj97+BF2FMntbRcA0Z5l1LMeHNEmuMvtSnBjyOkWPFgwzi25me03F4JXuTWXm2VQ42fFXTwjAHELwqFVJfAAuTWXmppvYBcgQieuQJ7DkYaOA4eynZJjwkagy2G2IDHmb3gQXPay1ihgJjlhmtcxnwNazuqd44F1ZaYSVBAklJQMPivyPQG1Ip3/tFHFicKBFX2JufuZtSa52YIkyfpNybpmjGW33G7TAVq1GQy6YxGowjz0Ax7baK8SZJxjQIcdz+EKYtiO4DZdlAZ9ioBDeoAhsRXhHQPjuyXrWMAVguasEtlUJs+7DzDLHu3B/atUj4Gt0jKgElMa1MaeEz9ZmdXTZ9wfim1IIyzJEnKF0UpT8A6vescM6A8wS1fe1bDnkdREP7iBNR1GCqVcC0gncWRQyeoelGVkSRF2Pe2dUNs2enE+sGmNTEvt6n9P7onr9tsdn/lYLire/aVUfb1rk2kiWqbIBjilki7hlPyDYzaqqmVArMz6BxZ1rfxeF2g4WrpmYHRyRJJZgLBqF9HcNXE6EAMm9RqNHMEi4ySY9aaOx0eoaqEc8WpgGialoCg8/WlN/2H17eG0Z8UesZ4OFJwCnrp+lLlVTwlydRn2gUFpgKV16lruS8+FH/mwGD65UPDHu11yFoenc7ruAy1rbgUvFoYCdNsVfSgfutwl20diBILdwA5jKsdQDwF7KtIbpsL6BaqaqTkYhKvwxlrl4/Cdv8+bR8R8ckp7zm5FxA2O/KW+nC3xkujj/J0NEu1VD8FhIXoSd6Vp2JDKLM3hLYz07kgNSZEFhqE80XtvhHPk5xz157N8fruzkvip52vNOiXE0bnuN/ZQj9YLNk/7jSLDWEp8DfFmkIXb0X/vH4BZspf4aBeFyYAAAAASUVORK5CYII=" />
        </div>

        <div className={styles.tvl_card1}>
          <p className={styles.tvl_card1_p}>TVL</p>
        </div>
        <div className={styles.tvl_money1}>
          <p className={styles.tvl_money1_p}>4.91K  USDT</p>
        </div>
        <div className={styles.progressbar_2}></div>
        <div className={styles.progressbar2_fill}></div>
        <p className={styles.balance2}>100K USDT</p>
        <p className={styles.lp_apr1}>LP APR</p>
        <p className={styles.lp_apr1_percent}>0.13%</p>

        <button className={styles.deposit2}>
          Deposit
        </button>

        <button className={styles.withdraw2}>Withdraw</button>

        <img className={styles.base_logo2} src='https://app.rivera.money/img/aperture.svg' />
        <div><p className={styles.stable1}>Stable Spread Stratergy</p></div>
      </div>




      {/* <div className={styles.footer}>
        <h1>Hello</h1>
      </div> */}

    </div>
  );
};

export default Home;
