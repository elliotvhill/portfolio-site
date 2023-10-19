// import 'react-tooltip/dist/react-tooltip.cjs'
import { Tooltip as ReactTooltip } from "react-tooltip"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const footerDate = () => {
        let copyright = document.querySelector("#copy-year")
        copyright.innerHTML = `<p class="small">&copy; ${currentYear} Elliot Hill</p>`
      }
    return (
        <div className='footer'>
            <div className='footer-links'>
            {/* <ul className='footer-links dark-accent'>
                <li>
                        <a
                            href='https://www.linkedin.com/in/elliotvhill'
                            target='_blank'
                            className='social-li'
                        >
                    <div className='tooltip' id='icon-li'>
                            <img src='/assets/linkedin-in.svg' className="icon" />
                    </div>
                        </a>
                </li>
                <li>
                        <a
                            href='https://github.com/elliotvhill'
                            target='_blank'
                            className='social-gh'
                        >
                    <div className='tooltip' id='icon-gh'>
                            <img src='/assets/github.svg' className="icon" />
                    </div>
                        </a>
                </li>
                <li>
                        <a
                            href='https://instagram.com/elliotvh.dev'
                            target='_blank'
                            className='social-ins'
                        >
                    <div className='tooltip' id='icon-ins'>
                            <img src='/assets/instagram.svg' className="icon" />
                    </div>
                        </a>
                </li>
                <li>
                        <a
                            href='https://www.discord.com'
                            target='_blank'
                            className='social-dis'
                        >
                    <div className='tooltip' id='icon-dis'>
                        <img src='/assets/discord.svg' className="icon" />
                    </div>
                        </a>
                </li>
                </ul> */}
                </div>
            <ReactTooltip anchorId='icon-li' place='top' content='LinkedIn' />
            <ReactTooltip anchorId='icon-gh' place='top' content='GitHub' />
            <ReactTooltip anchorId='icon-dis' place='top' content='Discord' />
            <div id="copy-year">{ footerDate() }</div>
        </div>
    )
}
