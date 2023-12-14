import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";
import { Dropdown, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";
import NavContainer from "../components/nav-container";
import { createClient } from "@supabase/supabase-js";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";

const defaultOrder = [
  {
    key: "1",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Popular Properties
      </a>
    )
  },
  {
    key: "2",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Latest Properties
      </a>
    )
  },
  {
    key: "3",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Recommended Properties
      </a>
    )
  }
];

const LandingPage = () => {
  const client = createClient("https://qvbwjawuxksifawwxgwy.supabase.co/", 

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2YndqYXd1eGtzaWZhd3d4Z3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NDc0NDQsImV4cCI6MjAxNzIyMzQ0NH0.oZtJ_7VVqtRszzxXqqpY2tjCpi_faf9XcczaeQApPGQ "
  );

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from('real-estate').select('*');

      setProperties(result.data);
      console.log("Results :", result.data);
    }
    fetchProperties();
  }, [])

  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <NavContainer />
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-top">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="leading-[72px] font-semibold">
            Properties
          </div>
          <div className="text-base leading-[24px] text-whitesmoke-200 font-body-large-400">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start pt-16 pb-2 gap-[95px] text-left text-base text-gray-black font-body-large-400 lg:pl-[120px] lg:pr-[120px] lg:box-border">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row flex-wrap items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              menu={{ items: defaultOrder }}
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer 
          allProperties={properties}
        />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <Pagination 
            defaultCurrent={1}
            total={50}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;






{/* <div className="rounded bg-primary-50 flex flex-row items-start justify-start p-2.5">
            <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
          </div>
          <div className="rounded-10xs bg-primary-500 flex flex-col items-start justify-start py-2.5 px-[9px] text-gray-white">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              1
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              2
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              3
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              ...
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              54
            </div>
          </div>
          <div className="rounded bg-primary-500 flex flex-row items-start justify-start p-2.5">
            <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
          </div> */}
