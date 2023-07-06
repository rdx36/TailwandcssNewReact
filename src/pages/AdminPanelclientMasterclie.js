const AdminPanelclientMasterclie = () => {
  return (
    <div className="relative bg-primary-persian-blue-25 w-full h-[1080px] overflow-hidden text-left text-sm text-secondary-iss-dark-blue-100 font-typeface-nunito-sans-body-3">
      <div className="absolute top-[93px] left-[356px] rounded-lg bg-white shadow-[0px_1px_5px_rgba(3,_0,_55,_0.08)] w-[1544px] overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch bg-white flex flex-row py-4 px-6 items-center justify-start gap-[10px]">
          <div className="flex-1 flex flex-row items-center justify-start">
            <div className="w-[300px] h-10 flex flex-col items-start justify-start">
              <div className="self-stretch rounded-3xl bg-white box-border h-10 overflow-hidden shrink-0 flex flex-row py-3 px-4 items-center justify-start gap-[8px] border-[1px] border-solid border-grey-light-100">
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set.svg"
                />
                <div className="flex-1 relative leading-[20px]">Search</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[12px] text-grey-dark-150">
            <div className="w-[120px] flex flex-col items-end justify-start">
              <div className="self-stretch rounded-lg bg-white box-border h-10 flex flex-row py-3 px-4 items-center justify-center gap-[8px] border-[1px] border-solid border-grey-light-100">
                <div className="flex-1 relative leading-[20px]">Columns</div>
                <img
                  className="relative w-2.5 h-2.5 overflow-hidden shrink-0"
                  alt=""
                  src="/suffix-icon.svg"
                />
              </div>
            </div>
            <div className="rounded-lg bg-primary-persian-blue-50 h-10 flex flex-row py-3 px-4 box-border items-center justify-center gap-[12px] text-primary-persian-blue-100">
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/prefix-icon.svg"
              />
              <b className="relative tracking-[0.01em] leading-[20px]">
                Export
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-xs">
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-50" />
          <div className="self-stretch bg-primary-persian-blue-25 overflow-hidden flex flex-row py-2 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 relative tracking-[0.01em]">
              Company Name
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative tracking-[0.01em]">
                Email Address
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative tracking-[0.01em]">Phone No</div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative tracking-[0.01em]">
                Contact Person
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative tracking-[0.01em]">
                Facilitator
              </div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="relative tracking-[0.01em]">Sites</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative tracking-[0.01em]">Tenants</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative tracking-[0.01em]">
                Tenant Groups
              </div>
            </div>
            <div className="w-12 h-4 flex flex-row items-center justify-end">
              <div className="relative tracking-[0.01em]">Actions</div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-50" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="relative w-8 h-8">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/user@2x.png"
                />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-success-100 box-border hidden border-[1px] border-solid border-white" />
              </div>
              <div className="flex-1 relative leading-[20px]">Infosys</div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@infosys.com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 9563214587
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">{`Vijayent Roy `}</div>
            </div>
            <div className="w-[120px] hidden flex-row items-start justify-start text-red-125">
              <div className="relative w-[52px] h-5">
                <div className="absolute top-[0%] left-[0%] leading-[20px]">
                  Pending
                </div>
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">12</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="relative w-8 h-8">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/user1@2x.png"
                />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-success-100 box-border hidden border-[1px] border-solid border-white" />
              </div>
              <div className="flex-1 relative leading-[20px]">Wipro</div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@wipro.com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 9834687423
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">{`Kalpit Soni `}</div>
            </div>
            <div className="w-[120px] hidden flex-row items-start justify-start text-green-150">
              <div className="relative w-[52px] h-5">
                <div className="absolute top-[0%] left-[0%] leading-[20px]">
                  Paid
                </div>
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">8</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="relative w-8 h-8">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/user2@2x.png"
                />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-success-100 box-border hidden border-[1px] border-solid border-white" />
              </div>
              <div className="flex-1 relative leading-[20px]">{`Accenture `}</div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@accenture .com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 8732654789
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">Drishti Sane</div>
            </div>
            <div className="w-[120px] hidden flex-row items-start justify-start text-green-150">
              <div className="relative w-[52px] h-5">
                <div className="absolute top-[0%] left-[0%] leading-[20px]">
                  Paid
                </div>
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">4</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="relative w-8 h-8">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/user3@2x.png"
                />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-success-100 box-border hidden border-[1px] border-solid border-white" />
              </div>
              <div className="flex-1 relative leading-[20px]">{`Capgemini `}</div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@capgemini .com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 8432657995
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">{`Aisha Keer `}</div>
            </div>
            <div className="w-[120px] hidden flex-row items-start justify-start text-green-150">
              <div className="relative w-[52px] h-5">
                <div className="absolute top-[0%] left-[0%] leading-[20px]">
                  Paid
                </div>
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">6</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px] text-dimgray">
              <div className="relative w-8 h-8">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl bg-primary-persian-blue-25" />
                <b className="absolute top-[18.75%] left-[34.38%]">L</b>
              </div>
              <div className="flex-1 relative leading-[20px] text-secondary-iss-dark-blue-100">
                Lodha
              </div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@lodha.com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 9642357894
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">Kanika Khare</div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">24</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">16</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">8</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="relative w-8 h-8">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/user4@2x.png"
                />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-success-100 box-border hidden border-[1px] border-solid border-white" />
              </div>
              <div className="flex-1 relative leading-[20px]">
                Tata Consultancy Services
              </div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@tcs.com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 9632457468
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">{`Prabhat Rao `}</div>
            </div>
            <div className="w-[120px] hidden flex-row items-start justify-start text-red-125">
              <div className="relative w-[52px] h-5">
                <div className="absolute top-[0%] left-[0%] leading-[20px]">
                  Pending
                </div>
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">10</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">-</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="relative w-8 h-8">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/user5@2x.png"
                />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-success-100 box-border hidden border-[1px] border-solid border-white" />
              </div>
              <div className="flex-1 relative leading-[20px]">HCL</div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@hcl.com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 9452136487
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">Venkat Pant</div>
            </div>
            <div className="w-[120px] hidden flex-row items-start justify-start text-green-150">
              <div className="relative w-[52px] h-5">
                <div className="absolute top-[0%] left-[0%] leading-[20px]">
                  Paid
                </div>
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">5</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">2</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">1</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px] text-dimgray">
              <div className="relative w-8 h-8">
                <div className="absolute h-[112.5%] w-[112.5%] top-[-6.25%] right-[-6.25%] bottom-[-6.25%] left-[-6.25%] rounded-41xl bg-primary-persian-blue-25 box-border border-[2px] border-solid border-primary-persian-blue-50" />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-green-125 box-border border-[1px] border-solid border-white" />
                <b className="absolute top-[18.75%] left-[34.38%]">R</b>
              </div>
              <div className="flex-1 relative leading-[20px] text-secondary-iss-dark-blue-100">{`Redington `}</div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@redington.com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 9326571865
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">Samir Yadav</div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">1</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">1</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="relative w-8 h-8">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/user6@2x.png"
                />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-success-100 box-border hidden border-[1px] border-solid border-white" />
              </div>
              <div className="flex-1 relative leading-[20px]">{`Mphasis `}</div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@mphasis.com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 9874621547
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">Sweta Chawla</div>
            </div>
            <div className="w-[120px] hidden flex-row items-start justify-start text-green-150">
              <div className="relative w-[52px] h-5">
                <div className="absolute top-[0%] left-[0%] leading-[20px]">
                  Paid
                </div>
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">1</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch bg-white overflow-hidden flex flex-row py-3 px-6 items-center justify-start gap-[12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <div className="relative w-8 h-8">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/user7@2x.png"
                />
                <div className="absolute h-1/4 w-3/12 top-[71.88%] right-[3.13%] bottom-[3.13%] left-[71.88%] rounded-[50%] bg-success-100 box-border hidden border-[1px] border-solid border-white" />
              </div>
              <div className="flex-1 relative leading-[20px]">{`Larsen & Toubro`}</div>
            </div>
            <div className="w-[280px] flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                management@larsentoubro.com
              </div>
            </div>
            <div className="w-40 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                +91 9547154964
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">
                Abhishek Kumar
              </div>
            </div>
            <div className="w-[120px] hidden flex-row items-start justify-start text-green-150">
              <div className="relative w-[52px] h-5">
                <div className="absolute top-[0%] left-[0%] leading-[20px]">
                  Paid
                </div>
              </div>
            </div>
            <div className="w-48 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">16</div>
            </div>
            <div className="w-20 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-24 flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[20px]">--</div>
            </div>
            <div className="w-12 flex flex-row items-center justify-center">
              <div className="rounded-lg w-8 h-8 flex flex-row py-3 px-5 box-border items-center justify-center">
                <img
                  className="relative w-4 h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/icon-set1.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-primary-persian-blue-25" />
        </div>
        <div className="self-stretch hidden" />
        <div className="self-stretch hidden" />
        <div className="self-stretch flex flex-row p-6 items-center justify-between text-xs text-secondary-iss-dark-blue-50">
          <div className="w-[355px] flex flex-row items-center justify-center gap-[8px]">
            <div className="rounded-lg bg-primary-persian-blue-100 w-10 h-10 overflow-hidden shrink-0 flex flex-row p-2 box-border items-center justify-center text-white">
              <div className="relative tracking-[0.01em]">1</div>
            </div>
            <div className="rounded-lg bg-white w-10 h-10 overflow-hidden shrink-0 flex flex-row p-2 box-border items-center justify-center">
              <div className="relative tracking-[0.01em]">2</div>
            </div>
            <div className="rounded-lg bg-white w-10 h-10 overflow-hidden shrink-0 flex flex-row p-2 box-border items-center justify-center">
              <div className="relative tracking-[0.01em]">3</div>
            </div>
            <div className="rounded-lg bg-white w-10 h-10 overflow-hidden shrink-0 flex flex-row p-2 box-border items-center justify-center">
              <div className="relative tracking-[0.01em]">...</div>
            </div>
            <div className="rounded-lg bg-white w-10 h-10 overflow-hidden shrink-0 flex flex-row p-2 box-border items-center justify-center">
              <div className="relative tracking-[0.01em]">48</div>
            </div>
            <div className="rounded-lg bg-white w-10 h-10 overflow-hidden shrink-0 flex flex-row p-2 box-border items-center justify-center">
              <div className="relative tracking-[0.01em]">49</div>
            </div>
            <div className="rounded-lg bg-white w-10 h-10 overflow-hidden shrink-0 flex flex-row p-2 box-border items-center justify-center">
              <div className="relative tracking-[0.01em]">50</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] text-sm text-grey-dark-100">
            <div className="rounded-lg h-10 flex flex-row py-3 px-4 box-border items-center justify-center gap-[12px]">
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/icon-set2.svg"
              />
              <b className="relative tracking-[0.01em] leading-[20px]">
                Previous
              </b>
            </div>
            <div className="rounded-lg bg-grey-light-50 h-10 flex flex-row py-3 px-4 box-border items-center justify-center gap-[12px] text-secondary-iss-dark-blue-50">
              <b className="relative tracking-[0.01em] leading-[20px]">Next</b>
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/suffix-icon1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[338px] left-[1668px] rounded-lg bg-white shadow-[0px_4px_16px_rgba(3,_0,_55,_0.08)] w-[200px] overflow-hidden flex flex-col p-2 box-border items-start justify-start gap-[8px]">
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-2 px-4 items-center justify-start gap-[12px]">
          <img
            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
            alt=""
            src="/icon-set3.svg"
          />
          <div className="relative leading-[20px] flex items-center w-[142px] shrink-0">
            View Details
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-2 px-4 items-center justify-start gap-[12px]">
          <img
            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
            alt=""
            src="/icon-set4.svg"
          />
          <div className="relative leading-[20px] flex items-center w-[142px] shrink-0">
            Edit
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-2 px-4 items-center justify-start gap-[12px]">
          <img
            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
            alt=""
            src="/icon-set5.svg"
          />
          <div className="relative leading-[20px] flex items-center w-[142px] shrink-0">
            Block Access
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row py-2 px-4 items-center justify-start gap-[12px]">
          <img
            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
            alt=""
            src="/icon-set6.svg"
          />
          <div className="relative leading-[20px] flex items-center w-[142px] shrink-0">
            Delete
          </div>
        </div>
      </div>
      <div className="absolute top-[20px] left-[356px] w-[1544px] flex flex-row items-center justify-start gap-[20px] text-5xl">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="relative leading-[120%] font-extrabold">
            View Clients
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-center text-xs">
            <div className="bg-other-clickable flex flex-row items-center justify-start">
              <div className="relative tracking-[0.01em]">Client Master</div>
            </div>
            <div className="bg-other-clickable flex flex-row items-center justify-start gap-[8px] text-secondary-iss-dark-blue-50">
              <div className="relative tracking-[0.01em]">/</div>
              <div className="relative tracking-[0.01em]">View Clients</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="rounded-lg w-10 h-10 flex flex-row py-3 px-5 box-border items-center justify-center">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/icon-set7.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[0px_1px_5px_rgba(3,_0,_55,_0.08)] w-[336px] flex flex-row items-start justify-start text-sand-100">
        <div className="self-stretch relative box-border w-px border-r-[1px] border-solid border-primary-persian-blue-50" />
        <div className="flex-1 h-[1080px] overflow-hidden flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch h-[72px] flex flex-row py-2 px-4 box-border items-center justify-start gap-[8px] text-[20px]">
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
                    src="/icon-set.svg"
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
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-base text-white">
                <div className="self-stretch rounded-lg bg-primary-persian-blue-100 shadow-[0px_4px_16px_rgba(3,_0,_55,_0.08)] overflow-hidden flex flex-row py-2 px-4 items-center justify-start">
                  <b className="flex-1 relative">View Clients</b>
                </div>
                <div className="self-stretch rounded-lg overflow-hidden flex flex-row py-2 px-4 items-center justify-start text-secondary-iss-dark-blue-50">
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
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-41xl max-w-full overflow-hidden max-h-full object-cover"
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
                src="/icon-set8.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelclientMasterclie;
