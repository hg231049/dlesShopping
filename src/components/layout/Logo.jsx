import { logo } from '../../assets/main';

const Logo = () => {
    return (
        <div className="main-logo max-w-[105px] w-full md:max-w-[162px] ">
            <a href="/home"><img src={logo} alt="로고" className="w-full" /></a>
        </div>
    )
}

export default Logo;