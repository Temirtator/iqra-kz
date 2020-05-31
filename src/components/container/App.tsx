import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/App.css'
import mainPhone from '../../assets/images/concept/2phone.png'
import logo from '../../assets/images/concept/logo.png'
import kuranPhone from '../../assets/images/concept/kuran-web.png'
import uakitPhone from '../../assets/images/concept/uakit-web.png'
import kitapPhone from '../../assets/images/concept/kitap-web.png'
import compass from '../../assets/images/concept/ic_compass.png'
import books from '../../assets/images/concept/ic_books.png'
import quran from '../../assets/images/concept/ic_quran.png'
import time from '../../assets/images/concept/ic_time.png'
import direction from '../../assets/images/concept/directi0n.png'
import LangComponent from '../presentational/LangComponent'
const kz = require('../../json/locale/landing_kz.json')
// const links = require('../../json/links_landing.json')
const url = 'http://iqra.kz/images/'
import { Link } from 'react-router-dom'

// export interface State {
//   langIsClicked: false
// }

// export interface Props {
// }

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="wrap">
          <div className="wrap__main">
              <section className="wrap__main__intro">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <img src={logo} className="logo" />
                        <LangComponent />
                        <div className="head-wrap">
                          <h1>QURANKZ APP</h1>
                          <h4>{kz.main_sub_text}</h4>
                          <p>
                            {kz.main_sub_text_1} 
                          </p>
                          <p>
                            Қосымша біздің сайтта <a href="http://iqra.kz/quran/index" title="Қүранның аудио нұсқасы">Құранның аудио нұсқасын</a> тындай аласыз
                          </p>
                          <div className="stores">
                            <div className="row stores__wrap">
                                <a target="_blank" href="https://itunes.apple.com/kz/app/quran-kz/id1120620764?mt=8">
                                  <img src={url + 'appstore.svg'} />
                                </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=kz.kokzhiek.qurankz&hl=ru">
                                  <img src={url + 'playstore.svg'} />
                                </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <LangComponent />
                        <img className="main-image" src={mainPhone} />
                      </div>
                     </div>
                  </div>  
              </section>
              <section className="wrap__main__kuran">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                         <img className="illustration" src={kuranPhone} />
                      </div>
                      <div className="col-lg-6">
                        <div className="expl-text">
                          <img src={quran} />
                          <h2>{kz.kuran_h2}</h2>
                          <p>
                            {kz.kuran_p}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>
              <section className="wrap__main__uakit">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="expl-text">
                          <img src={time} />
                          <h2>{kz.uakit_h2}</h2>
                          <p>
                            {kz.uakit_p}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <img className="illustration" src={uakitPhone} />
                      </div>
                    </div>
                  </div>
              </section>
              <section className="wrap__main__kitap">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <img className="illustration" src={kitapPhone} /> 
                      </div>
                      <div className="col-lg-6">
                        <div className="expl-text">
                          <img src={books} />
                          <h2>{kz.kitap_h2}</h2>
                          <p>
                            {kz.kitap_p}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>
              <section className="wrap__main__kubila">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="expl-text">
                          <img src={compass} />
                          <h2>{kz.kubila_h2}</h2>
                          <p>
                            {kz.kubila_p}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="animated-compass">
                          <img src={direction} />
                        </div>  
                      </div>
                    </div>
                  </div>
              </section>
              <section className="wrap__main__footer">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4"> 
                        <img className="footer_logo" src={logo} />
                      </div>
                      <div className="col-lg-4">
                        <div className="privacy">
                          <p>{kz.privacy_p}</p>
                            <Link target="_blank" to="/rules">{kz.privacy_a}</Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="social-netw">
                          <a target="_blank" href="https://www.instagram.com/qurankz_app/">
                            <img src={url + 'insta.svg'} />
                          </a>
                          <a target="_blank" href="https://www.facebook.com/kokzhiek/posts/1268523929914707">
                            <img src={url + '/fb.svg'} />
                          </a>
                          <a target="_blank" href="#">
                            <img src={url + 'vk.png'} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>
          </div>
      </div>
    )
  }
}
export default App