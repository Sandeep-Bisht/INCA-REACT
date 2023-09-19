import React, { useState, useEffect } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import '../../css/accommodation.css';

function Accommodation() {
  const [error, setError] = useState(null);
  const [isMounted, setIsMounted] = useState(true);
  const [docs, setDocs] = useState([
    {
      uri:"/details.docx",
      fileType: "docx",
      fileName: "details.docx"
    }
  ]);

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
<>
<div className='container-fluid p-4'>
   <div className='row'>
      <div className='col-12'>
  <p
    style={{
      marginTop: "0in",
      marginRight: "0in",
      marginBottom: ".0001pt",
      marginLeft: "0in",
      fontSize: "11.0pt",
      fontFamily: '"Calibri",sans-serif',
      textAlign: "center",
      lineHeight: "normal"
    }}
  >
    <strong>
      <span style={{ fontSize: 24 }}>
        Hotel Accommodation Availability at Jodhpur
      </span>
    </strong>
    <strong>
      <span style={{ fontSize: 16 }}>&nbsp;</span>
    </strong>
  </p>
  <p
    style={{
      marginTop: "0in",
      marginRight: "0in",
      marginBottom: ".0001pt",
      marginLeft: "0in",
      fontSize: "11.0pt",
      fontFamily: '"Calibri",sans-serif',
      lineHeight: "normal"
    }}
  >
    <strong>DISCLAIMER:</strong>&nbsp;
  </p>
  <p
    style={{
      marginTop: "0in",
      marginRight: "0in",
      marginBottom: ".0001pt",
      marginLeft: "0in",
      fontSize: "11.0pt",
      fontFamily: '"Calibri",sans-serif',
      textAlign: "justify",
      lineHeight: "normal"
    }}
  >
    <strong>
      [A] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Accommodation Facility:&nbsp;
    </strong>
    To facilitate the delegates, the team of 43<sup>rd</sup> INCA has gathered
    the information about the Hotels of Jodhpur &amp; & Tariff with  &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp;&nbsp;the best negotiated rates. The booking may be done directly by the delegates contacting the respective hotel of their choice and eligibility while 
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;stating
    that the booking is for “43<sup>rd&nbsp;</sup>INCA Conference” being organized by ISRO, Jodhpur. The direct payment will be made to the Hotels according 
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;their travel
    plan.&nbsp;
  </p>
  <p
    style={{
      marginTop: "0in",
      marginRight: "0in",
      marginBottom: ".0001pt",
      marginLeft: ".5in",
      fontSize: "11.0pt",
      fontFamily: '"Calibri",sans-serif',
      lineHeight: "normal"
    }}
  >
    &nbsp;
  </p>
  <p
    style={{
      marginTop: "0in",
      marginRight: "0in",
      marginBottom: ".0001pt",
      marginLeft: ".5in",
      fontSize: "11.0pt",
      fontFamily: '"Calibri",sans-serif',
      textAlign: "justify",
      lineHeight: "normal"
    }}
  >
     These negotiated rates are valid for a limited period only and since November is tourist season,
      you are advised to make bookings as early as possible.
      The hotels may not be able to honor the indicated rates in the last 20 days before the Congress.
  </p>
  <p
    style={{
      marginTop: "0in",
      marginRight: "0in",
      marginBottom: ".0001pt",
      marginLeft: "0in",
      fontSize: "11.0pt",
      fontFamily: '"Calibri",sans-serif',
      lineHeight: "normal"
    }}
  >
    &nbsp;
  </p>
  <p
    style={{
      marginTop: "0in",
      marginRight: "0in",
      marginBottom: ".0001pt",
      marginLeft: ".5in",
      fontSize: "11.0pt",
      fontFamily: '"Calibri",sans-serif',
      textIndent: "-.5in",
      lineHeight: "normal"
    }}
  >
    <strong>
      [B]&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Transport Facility:
    </strong>{" "}
    To be provided from the below identified hotels to  43<sup>rd</sup> INCA Venue and back only for attending the Congress related events i.e. from 06.11.2023 to 08.11.2023 on sharing basis at fixed timing. This transport facility will not be available to and from Airport/Railway Station/Bus Stand for pickup/drop. 
    &nbsp;
  </p>
  </div>
   </div>
  <table
    style={{ width: "7.4e+2pt", borderCollapse: "collapse", border: "none" }}
  >
    <thead>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderTop: "1pt solid rgb(91, 155, 213)",
            borderBottom: "1pt solid rgb(91, 155, 213)",
            borderLeft: "1pt solid rgb(91, 155, 213)",
            borderImage: "initial",
            borderRight: "none",
            background: "rgb(91, 155, 213)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "center",
              lineHeight: "normal"
            }}
          >
            <strong>
              <span style={{ color: "white" }}>S. No.</span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "1pt solid rgb(91, 155, 213)",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(91, 155, 213)",
            borderRight: "none",
            background: "rgb(91, 155, 213)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "center",
              lineHeight: "normal"
            }}
          >
            <strong>
              <span style={{ color: "white" }}>
                Name &amp; Address of Hotel
              </span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "1pt solid rgb(91, 155, 213)",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(91, 155, 213)",
            borderRight: "none",
            background: "rgb(91, 155, 213)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "center",
              lineHeight: "normal"
            }}
          >
            <strong>
              <span style={{ color: "white" }}>
                Contact Person (Phone/Email)
              </span>
            </strong>
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "1pt solid rgb(91, 155, 213)",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(91, 155, 213)",
            borderRight: "none",
            background: "rgb(91, 155, 213)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "center",
              lineHeight: "normal"
            }}
          >
            <span style={{ color: "white" }}>Room Type</span>
          </p>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "1pt solid rgb(91, 155, 213)",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(91, 155, 213)",
            borderRight: "none",
            background: "rgb(91, 155, 213)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "center",
              lineHeight: "normal"
            }}
          >
            <span style={{ color: "white" }}>No. Of Rooms</span>
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "1pt solid rgb(91, 155, 213)",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(91, 155, 213)",
            borderRight: "none",
            background: "rgb(91, 155, 213)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "center",
              lineHeight: "normal"
            }}
          >
            <span style={{ color: "white" }}>Tariff in Rs. /Day</span>
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "1pt solid rgb(91, 155, 213)",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(91, 155, 213)",
            borderRight: "none",
            background: "rgb(91, 155, 213)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "center",
              lineHeight: "normal"
            }}
          >
            <span style={{ color: "white" }}>GST</span>
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "1pt solid rgb(91, 155, 213)",
            borderRight: "1pt solid rgb(91, 155, 213)",
            borderBottom: "1pt solid rgb(91, 155, 213)",
            borderImage: "initial",
            borderLeft: "none",
            background: "rgb(91, 155, 213)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "center",
              lineHeight: "normal"
            }}
          >
            <strong>
              <span style={{ color: "white" }}>
              Distance from RRSC-West  &amp; Remarks
              </span>
            </strong>
          </p>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "decimal",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                &nbsp;
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Radisson Hotel</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Gaurav Path, Airport Road, Jodhpur.&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person:&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Sumit Dhandia
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 9116633018
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: sales@rdjodhpur.in
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Superior Room
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Junior Suite
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            20
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            06
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            7499
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            10000
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12%
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12%
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            9 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 15:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 12.00 Hrs, Breakfast Complimentary
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                &nbsp;
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Kasturi Orchid</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Pal Chopasani Bypass Road, Near DPS School, Jodhpur.
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Chain Singh
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 8094008346/44
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: sales@kasturiorchid.com
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Deluxe&nbsp;
              </li>
            </ul>
          </div>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "8.95pt",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify"
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "8.95pt",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify"
            }}
          >
            &nbsp;
          </p>
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Suite
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            44
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            02
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            3200/3500
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            (Single/Double)
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            5000
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            7 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 10:00 Hrs – 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 10:00 Hrs – 12:00 , Breakfast Complimentary
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Rajwara Palace</strong>&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              lineHeight: "normal"
            }}
          >
            Opp. Govt. Veterinary Hospital, Ratanada,&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Jodhpur.
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Gajendra Singh Bhati
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 7665581115/ 0291-2515242
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: hotelrajwarapalace.om@gmail.com
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Comfort
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Club
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Classic
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            23
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            13
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            04
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            3500
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            4500
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            5500
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            11 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 10.00 AM&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              lineHeight: "normal"
            }}
          >
            <strong>Fairfield by Marriott</strong> Opp. New High Court Near 
            Shatabdi Circle,
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Jodhpur.
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Shubham Mathur
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 9001514543
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: shubham.mathur@marriott.com
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Premium
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Junior Suite
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            50
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            06
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            04
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            7499
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            8499
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            15000
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12%&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            18%
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            18%
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "30.7pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            3 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 14:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 12.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Chandra Inn&nbsp;</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Near  Panch Batti Circle, Airport Road, Jodhpur.
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Devesh Mishra
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 6377200332&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: chandrainn@yahoo.co.in
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Super Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Suite
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            44
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            16
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            04
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            2600
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            3500
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            4000
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12%
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12%
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12%
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "24.45pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            10 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 10.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Shri Ram Excellency&nbsp;</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              lineHeight: "normal"
            }}
          >
            Residency Road,&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              lineHeight: "normal"
            }}
          >
            Opp. Medical College Jodhpur.
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Nadeen Khan/ Shambhu Das
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 7230862444 / 555&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: info@hotelshriramexcellency.com
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Superior
              </li>
            </ul>
          </div>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            18
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            5500
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            6500
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12%
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12%
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            10 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 14:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 10.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Shri Ram International&nbsp;</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Near Panch Batti Circle, Airport Road, Jodhpur.
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Bhuvnesh Malik
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 8769190441
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: sales@shreeraminternational.com
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Deluxe
          </p>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            30
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            6000
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            11 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 14:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 11.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast  Complimentary
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            padding: "0in 5.4pt",
            height: "27.85pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "27.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Mapple Abhay&nbsp;</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Paota Circle,&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Near Bus Stand, Jodhpur.&nbsp;
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "27.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Ms. Neha Tyagi
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 88753 15326
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: fomjdr@mapplehotels.com
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "27.85pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Club
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "27.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            10
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            10
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "27.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            3500
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            4200
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "27.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "27.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            13 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 12.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Rajputana Palace&nbsp;</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Panch Batti Circle, Airport   Road, Jodhpur&nbsp;
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Sandeep Singh Bhaghel
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 0291-2799600/ 9636106101&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: gm@rajputanapalace.in
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
               	Super  Deluxe
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            22
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            26
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            2500
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            3000
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            10 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 12.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Niky International&nbsp;</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Near Panch Batti Circle Airport Road, Jodhpur.&nbsp;
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Devi Singh
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 9799559281
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: info@hotelniky.com
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Deluxe
          </p>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            15
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            3800
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            10.5 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 14:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 11.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Dazzle</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              lineHeight: "normal"
            }}
          >
            5-S-53/64, Ward 13, Near RRSC-West/ISRO
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Jodhpur.&nbsp;
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Surendra Choudhary
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 9352357761
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: hoteldazzlejodhpur@gmail.com
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Standard
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Super Deluxe
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            10
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            02
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            03
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            2300
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            2700
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            3200
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            0.5 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 11.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary,&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Rates are for 2 persons per room
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            padding: "0in 5.4pt",
            height: "48.85pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "48.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Ghoomer</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            R.T.D.C., Old High Court Road, Jodhpur.&nbsp;
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "48.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Manvender Singh
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 8562081000
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: ghoomer.rtdc@rajasthan.gov.in
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "48.85pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Suite
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Super Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Deluxe
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Standard
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "48.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            01
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            14
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            34
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            26
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "48.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            2800
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            1610
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            1190
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            980
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "48.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            GST  As Applicable
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            height: "48.85pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 12.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel Krishna Inn</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Sector 1, Kudi Bhagtasni Housing Board,&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            KK Colony, Jodhpur.&nbsp;
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Dheeraj Kumawat
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 9351368297
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: hotelshrikrishnainn@gmail.com
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Single
              </li>
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Classic
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            02
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            06
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            1200
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            1500
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            height: "36.65pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            1 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 11.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Hotel The Kashi Inn</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              lineHeight: "normal"
            }}
          >
            Janta Colony, Sector-2, Kudi Bhagtasni Housing Board, Jodhpur.
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact Person: Jogadri Singh&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Contact No.: 7073943150
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Email: thekashiinn@gmail.com
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Deluxe
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            19
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            1680
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Included
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            1 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-in: 12:00 Hrs
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Check-out: 11.00 Hrs&nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast Complimentary
          </p>
        </td>
      </tr>
      <tr>
        <td
          style={{
            width: "35.05pt",
            borderRight: "1pt solid rgb(156, 194, 229)",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderLeft: "1pt solid rgb(156, 194, 229)",
            borderImage: "initial",
            borderTop: "none",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ol
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-0.25in"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <strong>&nbsp;</strong>
              </li>
            </ol>
          </div>
        </td>
        <td
          style={{
            width: "113.4pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <strong>Government Youth Hostel</strong>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              lineHeight: "normal"
            }}
          >
            Circuit House Road, Ratanada, Jodhpur.
          </p>
        </td>
        <td
          style={{
            width: "141.75pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            E-mail: youthhosteljodhpur@gmail.com
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "106.45pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Dormitory&nbsp;
              </li>
            </ul>
          </div>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "8.95pt",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify"
            }}
          >
            &nbsp;
          </p>
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Shared Gen. room
              </li>
            </ul>
          </div>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "8.95pt",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify"
            }}
          >
            &nbsp;
          </p>
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                Shared AC room
              </li>
            </ul>
          </div>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "8.95pt",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify"
            }}
          >
            &nbsp;
          </p>
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "undefined",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                <span style={{ fontFamily: "Symbol", fontSize: "10.0pt" }}>
                  ·&nbsp;&nbsp;
                </span>
                Non-AC Double Bed&nbsp;
                <span style={{ fontSize: 13 }}>(With Common Bath)</span>
              </li>
            </ul>
          </div>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "8.95pt",
              lineHeight: "normal",
              fontSize: 15,
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify"
            }}
          >
            &nbsp;
          </p>
          <div
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: "8.0pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif'
            }}
          >
            <ul
              style={{
                marginBottom: "0in",
                listStyleType: "disc",
                marginLeft: "-1.0500000000000007px"
              }}
            >
              <li
                style={{
                  marginTop: "0in",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                  fontSize: "11.0pt",
                  fontFamily: '"Calibri",sans-serif'
                }}
              >
                AC Double Bed
              </li>
            </ul>
          </div>
        </td>
        <td
          style={{
            width: "42.55pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "85.05pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            90
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <span style={{ fontSize: 16 }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            135
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <span style={{ fontSize: 17 }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            200
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <span style={{ fontSize: 16 }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            515
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            <span style={{ fontSize: 12 }}>&nbsp;</span>
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            800
          </p>
        </td>
        <td
          style={{
            width: "49.6pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            &nbsp;
          </p>
        </td>
        <td
          style={{
            width: "161pt",
            borderTop: "none",
            borderLeft: "none",
            borderBottom: "1pt solid rgb(156, 194, 229)",
            borderRight: "1pt solid rgb(156, 194, 229)",
            background: "rgb(222, 234, 246)",
            padding: "0in 5.4pt",
            verticalAlign: "top"
          }}
        >
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            12 km
          </p>
          <p
            style={{
              marginTop: "0in",
              marginRight: "0in",
              marginBottom: ".0001pt",
              marginLeft: "0in",
              fontSize: "11.0pt",
              fontFamily: '"Calibri",sans-serif',
              textAlign: "justify",
              lineHeight: "normal"
            }}
          >
            Breakfast available at nominal charges.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</>

  );
}

export default Accommodation;
