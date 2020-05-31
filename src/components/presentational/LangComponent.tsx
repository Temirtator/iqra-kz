import * as React from 'react'

// export interface State {
//     langIsClicked: boolean,
//     default: number,
//     langIndex: number,
//     lang: string
// }

// export interface Props {}

class LangComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            langIsClicked: false,
            default: 0,
            langIndex: 0,
            lang: 'Қазақша'
        }
        this.showLang = this.showLang.bind(this)
        this.changeLang = this.changeLang.bind(this)
    }
    
    showLang() {
        let prev = this.state.langIsClicked
        this.setState({
          langIsClicked: !prev 
        })
    }

    changeLang(index: number) {
        switch (index) {
            case 0:
                this.setState({
                    langIndex: 0,
                    lang: 'Қазақша'
                })
                break
            case 1:
                this.setState({
                    langIndex: 1,
                    lang: 'Русский'
                })
                break
            default:
                break
        }
        this.setState({
            langIsClicked: false
        })
    }

    render() {
        let { langIsClicked, lang } = this.state
        return (
            <div className="lang">
                <div onClick={() => this.showLang()} className="lang__main">
                <span>{lang + ' '}</span>
                <span>&#9660;</span>
                </div>
                <div className={langIsClicked ? 'lang__choice lang__choice__active' : 'lang__choice'}>
                <span onClick={() => this.changeLang(0)}>Қазақша</span>
                <span onClick={() => this.changeLang(1)}>Русский</span>
                </div>
            </div>
        )
    }
}

export default LangComponent