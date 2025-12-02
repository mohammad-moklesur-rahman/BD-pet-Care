import { useEffect } from "react";
import MyContainer from "../components/MyContainer";
import AOS from "aos";
import "aos/dist/aos.css";

const Privacy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <MyContainer>
      <div className="mb-20 mt-10 p-8 lg:p-12 bg-white shadow-2xl rounded-xl text-gray-700 leading-relaxed">
        <h1 data-aos="fade-right" className="text-3xl font-bold pb-8 pt-2">
          Privacy Policy 📜
        </h1>
        <div data-aos="fade-up">
          <p className="text-sm text-gray-500 mb-8 tracking-widest uppercase">
            Last updated: December 02, 2025
          </p>

          {/* Introduction */}
          <div className="space-y-4 mb-12 p-4 border-l-4 border-indigo-400 bg-indigo-50/50">
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p className="font-bold">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </div>

          {/*Main Section Heading*/}
          <h2 className="text-2xl font-bold mt-10 mb-4 pt-4 border-t-2 border-gray-200">
            Interpretation and Definitions
          </h2>

          {/* Sub-Section Heading */}
          <h3 className="text-[18px] font-semibold text-gray-800 mt-6 mb-3">
            Interpretation
          </h3>
          <p className="mb-4">
            The words whose initial letters are capitalized have meanings
            defined under the following conditions...
          </p>

          <h3 className="text-[18px] font-semibold text-gray-800 mt-6 mb-3">
            Definitions
          </h3>
          <p className="mb-4">For the purposes of this Privacy Policy:</p>

          {/* Definition List*/}
          <ul className="list-disc list-inside space-y-4 mb-10 ml-4">
            <li>
              <strong className="font-bold">Account</strong> means a unique
              account created for You...
            </li>
            <li>
              <strong className="font-bold">Affiliate</strong> means an entity
              that controls, is controlled by, or is under common control with a
              party...
            </li>
            <li>
              <strong className="font-bold">Company</strong> (referred to as
              either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or
              &quot;Our&quot; in this Agreement) refers to BD pet Care.
            </li>
            <li>
              <strong className="font-bold">Cookies</strong> are small files
              that are placed on Your computer...
            </li>
            <li>
              <strong className="font-bold">Country</strong> refers to:
              Bangladesh
            </li>
            <li>
              <strong className="font-bold">Device</strong> means any device
              that can access the Service...
            </li>
            <li>
              <strong className="font-bold">Personal Data</strong> is any
              information that relates to an identified or identifiable
              individual.
            </li>
            <li>
              <strong className="font-bold">Service</strong> refers to the
              Website.
            </li>
            <li>
              <strong className="font-bold">Service Provider</strong> means any
              natural or legal person who processes the data on behalf of the
              Company...
            </li>
            <li>
              <strong className="font-bold">Usage Data</strong> refers to data
              collected automatically...
            </li>
            <li>
              <strong className="font-bold">Website</strong> refers to BD pet
              Care, accessible from{" "}
              <a
                href="https://bd-pet-care.web.app/"
                target="_blank"
                className="link link-hover text-teal-600 font-normal"
              >
                https://bd-pet-care.web.app/
              </a>
            </li>
            <li>
              <strong className="font-bold">You</strong> means the individual
              accessing or using the Service...
            </li>
          </ul>

          {/* Main Section Heading */}
          <h2 className="text-2xl font-bold mt-10 mb-4 pt-4 border-t-2 border-gray-200">
            Collecting and Using Your Personal Data
          </h2>

          {/* Sub-Section Heading */}
          <h3 className="text-[18px] font-bold text-gray-800 mt-6 mb-3">
            Types of Data Collected
          </h3>
          {/*Sub-Sub-Section Heading */}
          <h4 className="text-lg font-semibold mt-4 mb-2">Personal Data</h4>
          <p className="mb-4">
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information...
          </p>
          <ul className="list-disc list-inside space-y-1 mb-6 ml-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Usage Data</li>
          </ul>

          <h4 className="text-lg font-bold mt-6 mb-2">Usage Data</h4>
          <p className="mb-4">
            Usage Data is collected automatically when using the Service.
          </p>
          <p className="mb-4">
            Usage Data may include information such as Your Device's Internet
            Protocol address (e.g. IP address), browser type, browser version...
          </p>
          <p className="mb-8">
            We may also collect information that Your browser sends...
          </p>

          <h4 className="text-lg font-bold text-teal-600 mt-6 mb-2">
            Tracking Technologies and Cookies
          </h4>
          <p className="mb-4">
            We use Cookies and similar tracking technologies to track the
            activity on Our Service and store certain information...
          </p>

          {/* Cookie  */}
          <ul className="list-disc list-inside space-y-6 mb-10 ml-4 p-4 rounded-lg bg-teal-50 border border-teal-200">
            <li className="p-2 border-b border-teal-100">
              <strong className="text-lg text-teal-700">
                Necessary / Essential Cookies
              </strong>

              <p className="text-sm text-gray-500">
                Type: Session Cookies | Administered by: Us
              </p>
              <p className="mt-1">
                Purpose: These Cookies are essential to provide You with
                services available through the Website...
              </p>
            </li>
            <li className="p-2 border-b border-teal-100">
              <strong className="text-lg text-teal-700">
                Cookies Policy / Notice Acceptance Cookies
              </strong>

              <p className="text-sm text-gray-500">
                Type: Persistent Cookies | Administered by: Us
              </p>
              <p className="mt-1">
                Purpose: These Cookies identify if users have accepted the use
                of cookies on the Website.
              </p>
            </li>
            <li className="p-2">
              <strong className="text-lg text-teal-700">
                Functionality Cookies
              </strong>

              <p className="text-sm text-gray-500">
                Type: Persistent Cookies | Administered by: Us
              </p>
              <p className="mt-1">
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website...
              </p>
            </li>
          </ul>
          <p className="mb-10 text-sm italic text-gray-500">
            For more information about the cookies we use and your choices
            regarding cookies...
          </p>

          {/* Sub-Section Heading */}
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Use of Your Personal Data
          </h3>
          <p className="mb-4">
            The Company may use Personal Data for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-3 mb-10 ml-4">
            <li>
              <strong className="text-gray-800">
                To provide and maintain our Service
              </strong>
            </li>
            <li>
              <strong className="text-gray-800">To manage Your Account:</strong>{" "}
              to manage Your registration as a user of the Service...
            </li>
          </ul>

          {/* Main Section Heading */}
          <h2 className="text-2xl font-bold mt-10 mb-4 pt-4 border-t-2 border-gray-200">
            Security and Compliance
          </h2>

          <h3 className="text-[18px] font-semibold text-gray-800 mt-6 mb-3">
            Security of Your Personal Data
          </h3>
          <p className="mb-10 p-4 bg-gray-500 text-white rounded-lg font-medium shadow-md">
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure...
          </p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
            Disclosure of Your Personal Data
          </h3>
          <h4 className="text-lg font-semibold mt-4 mb-2">Law enforcement</h4>
          <p className="mb-4">
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law...
          </p>
          <h4 className="text-lg font-semibold mt-4 mb-2">
            Other legal requirements
          </h4>
          <p className="mb-4">
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-10 ml-4">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
          </ul>

          {/* H2: Contact Us */}
          <h2 className="text-2xl font-bold mt-10 mb-4 pt-4 border-t-2 border-gray-200">
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-8 ml-4">
            <li>
              By visiting this page on our website:{" "}
              <a
                href="https://bd-pet-care.web.app/"
                target="_blank"
                className="link link-hover text-teal-600 font-normal"
              >
                https://bd-pet-care.web.app/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </MyContainer>
  );
};

export default Privacy;
