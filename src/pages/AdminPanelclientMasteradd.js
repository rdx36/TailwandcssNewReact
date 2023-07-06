const AdminPanelclientMasteradd = () => {
  return (
    <div className="relative bg-ghostwhite w-full h-[1080px] overflow-hidden text-left text-sm text-grey-dark-150 font-typeface-nunito-sans-body-3">
      <div className="absolute top-[92px] left-[356px] rounded-lg shadow-[0px_1px_5px_rgba(3,_0,_55,_0.08)] w-[1544px] overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch bg-white overflow-hidden flex flex-row items-start justify-start">
          <div className="flex-1 bg-white flex flex-col items-center justify-start text-primary-persian-blue-100">
            <div className="h-[67px] flex flex-row py-6 px-8 box-border items-center justify-center gap-[4px]">
              <div className="rounded-xl w-6 h-6 flex flex-col p-0.5 box-border items-center justify-center">
                <b className="relative tracking-[0.01em] uppercase">01</b>
              </div>
              <b className="relative tracking-[0.01em] uppercase">
                Create Profile
              </b>
            </div>
            <div className="self-stretch relative bg-primary-persian-blue-100 h-0.5" />
          </div>
          <div className="flex-1 bg-white flex flex-col items-center justify-start">
            <div className="h-[67px] flex flex-row py-6 px-8 box-border items-center justify-center gap-[4px]">
              <div className="rounded-xl w-6 h-6 flex flex-col p-0.5 box-border items-center justify-center">
                <b className="relative tracking-[0.01em] uppercase">02</b>
              </div>
              <b className="relative tracking-[0.01em] uppercase">
                Payment Setup
              </b>
            </div>
            <div className="self-stretch relative bg-grey-light-50 h-0.5" />
          </div>
          <div className="flex-1 bg-white flex flex-col items-center justify-start">
            <div className="h-[67px] flex flex-row py-6 px-8 box-border items-center justify-center gap-[4px]">
              <div className="rounded-xl w-6 h-6 flex flex-col p-0.5 box-border items-center justify-center">
                <b className="relative tracking-[0.01em] uppercase">03</b>
              </div>
              <b className="relative tracking-[0.01em] uppercase">
                Theme Setup
              </b>
            </div>
            <div className="self-stretch relative bg-grey-light-50 h-0.5" />
          </div>
          <div className="flex-1 bg-white flex flex-col items-center justify-start">
            <div className="h-[67px] flex flex-row py-6 px-8 box-border items-center justify-center gap-[4px]">
              <div className="rounded-xl w-6 h-6 flex flex-col p-0.5 box-border items-center justify-center">
                <b className="relative tracking-[0.01em] uppercase">04</b>
              </div>
              <b className="relative tracking-[0.01em] uppercase">
                modules Setup
              </b>
            </div>
            <div className="self-stretch relative bg-grey-light-50 h-0.5" />
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col p-6 items-start justify-start gap-[24px] text-secondary-iss-dark-blue-100">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-xl">
            <b className="self-stretch relative leading-[120%]">
              Create Client Profile
            </b>
            <div className="self-stretch relative text-sm leading-[20px] text-secondary-iss-dark-blue-50">
              Add some basic information related to the client.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-grey-dark-150">
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-base text-secondary-iss-dark-blue-100">
              <div className="rounded-[160px] box-border w-[120px] h-[120px] overflow-hidden shrink-0 flex flex-row items-center justify-center opacity-[0.8] border-[1px] border-solid border-grey-light-100">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                <div className="relative tracking-[0.01em]">Company Logo</div>
                <div className="relative text-xs tracking-[0.01em] text-secondary-iss-dark-blue-50">
                  Logo ratio shoud be 1:1 and should be 120px X 120 px
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    <span>{`Company Name `}</span>
                    <span className="text-crimson">*</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">Website</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[12px] border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    <span>{`Select Business Category `}</span>
                    <span className="text-crimson">*</span>
                  </div>
                  <img
                    className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set1.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start text-base">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[12px] border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative tracking-[0.01em]">
                    <span>{`Select Facility Management Company `}</span>
                    <span className="text-crimson">*</span>
                  </div>
                  <img
                    className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    <span>Company Email Address</span>
                    <span className="text-crimson"> *</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    <span>{`Mobile Number `}</span>
                    <span className="text-crimson">*</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
              <div className="w-[738px] flex flex-col pt-2 px-0 pb-0 box-border items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[12px] border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    <span>{`Select State `}</span>
                    <span className="text-crimson">*</span>
                  </div>
                  <img
                    className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set2.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[12px] border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    <span>{`Select City `}</span>
                    <span className="text-crimson">*</span>
                  </div>
                  <img
                    className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set2.svg"
                  />
                </div>
              </div>
              <div className="w-[200px] flex flex-col pt-2 px-0 pb-0 box-border items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    <span>{`Pincode `}</span>
                    <span className="text-crimson">*</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    <span>{`GST Number `}</span>
                    <span className="text-crimson">*</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col pt-2 px-0 pb-0 items-start justify-start">
                <div className="self-stretch rounded-lg bg-white box-border h-12 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start border-[1px] border-solid border-grey-light-100">
                  <div className="flex-1 relative leading-[20px]">
                    Fax Number
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row pt-2 px-0 pb-0 items-center justify-start gap-[24px] text-white">
            <div className="rounded-lg bg-primary-persian-blue-100 h-10 flex flex-row py-3 px-4 box-border items-center justify-center gap-[12px]">
              <b className="relative tracking-[0.01em] leading-[20px]">{`Save & Continue`}</b>
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/suffix-icon.svg"
              />
            </div>
            <div className="rounded-lg h-10 flex flex-row py-3 px-4 box-border items-center justify-center gap-[12px] text-secondary-iss-dark-blue-50">
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/icon-set3.svg"
              />
              <b className="relative tracking-[0.01em] leading-[20px]">Reset</b>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[20px] left-[356px] w-[1544px] flex flex-row items-center justify-start gap-[20px] text-5xl text-secondary-iss-dark-blue-100">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="relative leading-[120%] font-extrabold">
            Add Client
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-center text-xs">
            <div className="bg-other-clickable flex flex-row items-center justify-start">
              <div className="relative tracking-[0.01em]">Client Master</div>
            </div>
            <div className="bg-other-clickable flex flex-row items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.01em]">/</div>
              <div className="relative tracking-[0.01em]">Add Client</div>
            </div>
            <div className="bg-other-clickable flex flex-row items-center justify-start gap-[8px] text-secondary-iss-dark-blue-50">
              <div className="relative tracking-[0.01em]">/</div>
              <div className="relative tracking-[0.01em]">Create Profile</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="rounded-lg w-10 h-10 flex flex-row py-3 px-5 box-border items-center justify-center">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/icon-set4.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_1px_5px_rgba(3,_0,_55,_0.08)] w-[336px] flex flex-row items-start justify-start text-sand-100">
        <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-primary-persian-blue-50" />
        <div className="flex-1 h-[1080px] overflow-hidden flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch h-[72px] flex flex-row py-2 px-4 box-border items-center justify-start gap-[8px] text-xl">
              <div className="flex-1 h-10 flex flex-row items-center justify-start">
                <b className="relative leading-[120%]">Company name</b>
              </div>
              <div className="rounded-lg w-8 h-8 hidden" />
            </div>
            <div className="self-stretch flex flex-row pt-0 px-4 pb-4 items-center justify-start gap-[8px] text-sand-50">
              <div className="flex-1 h-10 flex flex-col items-start justify-start">
                <div className="self-stretch rounded-3xl bg-white box-border h-10 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[8px] border-[1px] border-solid border-grey-light-100">
                  <img
                    className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                    alt=""
                    src="/icon-set5.svg"
                  />
                  <div className="flex-1 relative leading-[20px]">
                    Search modules
                  </div>
                </div>
              </div>
              <div className="rounded-lg w-8 h-8 hidden" />
            </div>
            <div className="self-stretch flex flex-col pt-2 px-4 pb-4 items-start justify-start gap-[16px] text-grey-dark-100">
              <div className="self-stretch rounded overflow-hidden flex flex-row items-center justify-start gap-[12px]">
                <div className="relative w-[18px] h-[18px] overflow-hidden shrink-0 hidden" />
                <div className="flex-1 relative tracking-[0.04em] uppercase font-extrabold">
                  Client Master
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-secondary-iss-dark-blue-50">
                <div className="self-stretch rounded-lg overflow-hidden flex flex-row py-2 px-4 items-center justify-start">
                  <b className="flex-1 relative">View Clients</b>
                </div>
                <div className="self-stretch rounded-lg bg-primary-persian-blue-100 shadow-[0px_4px_16px_rgba(3,_0,_55,_0.08)] overflow-hidden flex flex-row py-2 px-4 items-center justify-start text-white">
                  <b className="flex-1 relative">Add Client</b>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-grey-light-50" />
          <div className="self-stretch h-[72px] flex flex-row py-2 px-4 box-border items-center justify-start gap-[8px] text-base">
            <div className="w-12 h-12 flex flex-row p-2.5 box-border items-center justify-center">
              <div className="relative w-10 h-10">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[60px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/unsplashgrymxaqdtp8@2x.png"
                />
                <div className="absolute h-1/5 w-1/5 top-[77.5%] right-[2.5%] bottom-[2.5%] left-[77.5%] rounded-[50%] bg-green-125 box-border border-[1px] border-solid border-white" />
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-lg overflow-hidden flex flex-col items-center justify-start">
              <b className="self-stretch relative">James Burton</b>
              <a
                className="self-stretch relative text-xs tracking-[0.01em] text-[inherit] [text-decoration:none]"
                href="mailto:james@thevouch.digital"
                target="_blank"
              >
                james@thevouch.digital
              </a>
            </div>
            <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/icon-set6.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelclientMasteradd;
