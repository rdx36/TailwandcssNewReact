const ThemeSetuppreviewPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-center text-13xl text-secondary-iss-dark-blue-100 font-typeface-nunito-sans-body-1">
      <div className="absolute top-[0px] left-[120px] h-[1080px] flex flex-col py-12 px-0 box-border items-center justify-between">
        <img
          className="relative w-[220px] h-[103.6px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <div className="w-[567px] flex flex-col items-center justify-start gap-[4px]">
            <div className="self-stretch relative font-extrabold">Welcome</div>
            <div className="self-stretch relative text-sm leading-[20px] text-secondary-iss-dark-blue-50">
              Enter your Username and Passoword.
            </div>
          </div>
          <div className="w-[567px] flex flex-col items-start justify-start gap-[16px] text-left text-base text-grey-dark-150">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="w-[567px] flex flex-col items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[12px] border-[1px] border-solid border-grey-light-100">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set.svg"
                  />
                  <div className="flex-1 relative tracking-[0.01em]">
                    Username
                  </div>
                </div>
              </div>
              <div className="w-[567px] flex flex-col items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[12px] border-[1px] border-solid border-grey-light-100">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set1.svg"
                  />
                  <div className="flex-1 relative tracking-[0.01em]">
                    Password
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-white">
              <div className="rounded-lg bg-primary-persian-blue-125 w-[567px] h-[54px] flex flex-row py-4 px-6 box-border items-center justify-center">
                <b className="relative">Login</b>
              </div>
              <div className="rounded-lg w-[567px] h-[49px] flex flex-row py-[15px] px-6 box-border items-center justify-center text-sm text-secondary-iss-dark-blue-50">
                <b className="relative">Forgot Password?</b>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-start gap-[24px]">
          <div className="w-[567px] flex flex-col items-center justify-start gap-[4px]">
            <div className="self-stretch relative font-extrabold">Welcome</div>
            <div className="self-stretch relative text-base tracking-[0.01em] text-secondary-iss-dark-blue-50">
              Enter your Username and Passoword.
            </div>
          </div>
          <div className="w-[567px] flex flex-col items-start justify-start gap-[16px] text-left text-sm text-grey-dark-150">
            <div className="flex flex-col items-start justify-start gap-[12px]">
              <div className="w-[567px] flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[12px] text-base border-[1px] border-solid border-grey-light-75">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set3.svg"
                  />
                  <div className="flex-1 relative tracking-[0.01em]">
                    Username
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] text-secondary-iss-dark-blue-100 hidden">
                    Input
                  </div>
                  <div className="relative w-5 h-5 overflow-hidden shrink-0 hidden" />
                </div>
                <div className="relative tracking-[0.01em] leading-[18px] text-secondary-iss-dark-blue-50 hidden">
                  Type input description here...
                </div>
                <div className="rounded bg-red-25 overflow-hidden hidden flex-row py-1 px-2 items-center justify-start gap-[4px] text-red-100">
                  <img
                    className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set3.svg"
                  />
                  <div className="relative tracking-[0.01em] leading-[18px]">
                    Error Message here
                  </div>
                </div>
              </div>
              <div className="w-[567px] flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[12px] text-base border-[1px] border-solid border-grey-light-75">
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set3.svg"
                  />
                  <div className="flex-1 relative tracking-[0.01em]">
                    Password
                  </div>
                  <div className="flex-1 relative tracking-[0.01em] text-secondary-iss-dark-blue-100 hidden">
                    Input
                  </div>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set3.svg"
                  />
                </div>
                <div className="relative tracking-[0.01em] leading-[18px] text-secondary-iss-dark-blue-50 hidden">
                  Type input description here...
                </div>
                <div className="rounded bg-red-25 overflow-hidden hidden flex-row py-1 px-2 items-center justify-start gap-[4px] text-red-100">
                  <img
                    className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set3.svg"
                  />
                  <div className="relative tracking-[0.01em] leading-[18px]">
                    Error Message here
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-base text-white">
              <div className="rounded-lg bg-primary-persian-blue-100 w-[567px] h-[54px] flex flex-row py-4 px-6 box-border items-center justify-center">
                <b className="relative">Login</b>
              </div>
              <div className="rounded-lg w-[567px] h-[49px] flex flex-row py-[15px] px-6 box-border items-center justify-center text-sm text-secondary-iss-dark-blue-50">
                <b className="relative">Forgot Password?</b>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[4px] text-left text-sm text-sand-100">
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[20px]">Terms of Use</div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[20px]">Privacy Policy</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-xs">
            <div className="relative tracking-[0.01em]">
              © Punctualiti 2022. All rights reserved
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[809px] w-[1111px] h-[1080px] text-left text-white">
        <div className="absolute top-[0px] left-[0px] bg-primary-persian-blue-125 w-[1111px] h-[1080px]" />
        <img
          className="absolute top-[107.79px] left-[175px] w-[781px] h-[643.69px]"
          alt=""
          src="/group-2.svg"
        />
        <div className="absolute top-[776px] left-[209px] flex flex-col items-center justify-center gap-[2px]">
          <div className="relative font-extrabold">
            360° Solution for Asset Management
          </div>
          <div className="relative text-base tracking-[0.01em] text-primary-persian-blue-25 text-center inline-block w-[713px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetuppreviewPage;
