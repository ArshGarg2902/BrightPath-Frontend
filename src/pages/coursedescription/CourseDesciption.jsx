// import React, { useEffect, useState } from "react";
// import "./coursedescription.css";
// import { useNavigate, useParams } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import { server } from "../../main";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { UserData } from "../../context/UserContext";
// import Loading from "../../components/loading/Loading";

// const CourseDescription = ({ user }) => {
//   const params = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

//   const { fetchUser } = UserData();

//   const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

//   useEffect(() => {
//     fetchCourse(params.id);
//   }, []);

//   // const checkoutHandler = async () => {
//   //   const token = localStorage.getItem("token");
//   //   setLoading(true);

//   //   const {
//   //     data: { order },
//   //   } = await axios.post(
//   //     `${server}/api/course/checkout/${params.id}`,
//   //     {},
//   //     {
//   //       headers: {
//   //         token,
//   //       },
//   //     }
//   //   );

//   //   const options = {
//   //     key: "rzp_test_yOMeMyaj2wlvTt", // Enter the Key ID generated from the Dashboard
//   //     amount: order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//   //     currency: "INR",
//   //     name: "E learning", //your business name
//   //     description: "Learn with us",
//   //     order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

//   //     handler: async function (response) {
//   //       const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//   //         response;

//   //       try {
//   //         const { data } = await axios.post(
//   //           `${server}/api/verification/${params.id}`,
//   //           {
//   //             razorpay_order_id,
//   //             razorpay_payment_id,
//   //             razorpay_signature,
//   //           },
//   //           {
//   //             headers: {
//   //               token,
//   //             },
//   //           }
//   //         );

//   //         await fetchUser();
//   //         await fetchCourses();
//   //         await fetchMyCourse();
//   //         toast.success(data.message);
//   //         setLoading(false);
//   //         navigate(`/payment-success/${razorpay_payment_id}`);
//   //       } catch (error) {
//   //         toast.error(error.response.data.message);
//   //         setLoading(false);
//   //       }
//   //     },
//   //     theme: {
//   //       color: "#8a4baf",
//   //     },
//   //   };
//   //   const razorpay = new window.Razorpay(options);

//   //   razorpay.open();
//   // };



//   // const checkoutHandler = async () => {
//   //   const token = localStorage.getItem("token");
//   //   setLoading(true);
  
//   //   try {
//   //     const {
//   //       data: { order },
//   //     } = await axios.post(
//   //       `${server}/api/course/checkout/${params.id}`,
//   //       {},
//   //       {
//   //         headers: {
//   //           token,
//   //         },
//   //       }
//   //     );
  
//   //     const options = {
//   //       key: "rzp_test_yOMeMyaj2wlvTt",
//   //       amount: order.amount,
//   //       currency: "INR",
//   //       name: "E learning",
//   //       description: "Learn with us",
//   //       order_id: order.id,
//   //       handler: async function (response) {
//   //         const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
  
//   //         try {
//   //           const { data } = await axios.post(
//   //             `${server}/api/verification/${params.id}`,
//   //             {
//   //               razorpay_order_id,
//   //               razorpay_payment_id,
//   //               razorpay_signature,
//   //             },
//   //             {
//   //               headers: {
//   //                 token,
//   //               },
//   //             }
//   //           );
  
//   //           await fetchUser();
//   //           await fetchCourses();
//   //           await fetchMyCourse();
//   //           toast.success(data.message);
//   //           setLoading(false);
//   //           navigate(`/payment-success/${razorpay_payment_id}`);
//   //         } catch (error) {
//   //           toast.error(error.response?.data?.message || "Payment verification failed");
//   //           setLoading(false);
//   //         }
//   //       },
//   //       theme: {
//   //         color: "#8a4baf",
//   //       },
//   //     };
  
//   //     const razorpay = new window.Razorpay(options);
//   //     razorpay.open();
//   //   } catch (error) {
//   //     toast.error(error.response?.data?.message || "Checkout failed");
//   //     setLoading(false);
//   //   }


//   const checkoutHandler = async () => {
//     const token = localStorage.getItem("token");
//     setLoading(true);
  
//     try {
//       const {
//         data: { order },
//       } = await axios.post(
//         `${server}/api/course/checkout/${params.id}`,
//         {},
//         {
//           headers: {
//             token,
//           },
//         }
//       );
  
//       // 👉 If course is free, enroll directly
//       if (order.amount === 0) {
//         const { data } = await axios.post(
//           `${server}/api/verification/${params.id}`,
//           {
//             razorpay_order_id: "FREE_ORDER",
//             razorpay_payment_id: "FREE_PAYMENT",
//             razorpay_signature: "FREE_SIGNATURE",
//           },
//           {
//             headers: {
//               token,
//             },
//           }
//         );
  
//         await fetchUser();
//         await fetchCourses();
//         await fetchMyCourse();
//         toast.success(data.message || "Successfully Enrolled");
//         setLoading(false);
//         navigate(`/payment-success/FREE_PAYMENT`);
//         return;
//       }
  
//       // 👉 Otherwise, go through Razorpay
//       const options = {
//         key: "rzp_test_yOMeMyaj2wlvTt",
//         amount: order.amount,
//         currency: "INR",
//         name: "E learning",
//         description: "Learn with us",
//         order_id: order.id,
//         handler: async function (response) {
//           const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//             response;
  
//           try {
//             const { data } = await axios.post(
//               `${server}/api/verification/${params.id}`,
//               {
//                 razorpay_order_id,
//                 razorpay_payment_id,
//                 razorpay_signature,
//               },
//               {
//                 headers: {
//                   token,
//                 },
//               }
//             );
  
//             await fetchUser();
//             await fetchCourses();
//             await fetchMyCourse();
//             toast.success(data.message);
//             setLoading(false);
//             navigate(`/payment-success/${razorpay_payment_id}`);
//           } catch (error) {
//             toast.error(error.response?.data?.message || "Payment verification failed");
//             setLoading(false);
//           }
//         },
//         theme: {
//           color: "#8a4baf",
//         },
//       };
  
//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Checkout failed");
//       setLoading(false);
//     }
//   };
  
  
//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         <>
//           {course && (
//             <div className="course-description">
//               <div className="course-header">
//                 <img
//                   src={`${server}/${course.image}`}
//                   alt=""
//                   className="course-image"
//                 />
//                 <div className="course-info">
//                   <h2>{course.title}</h2>
//                   <p>Instructor: {course.createdBy}</p>
//                   <p>Duration: {course.duration} weeks</p>
//                 </div>
//               </div>

//               <p>{course.description}</p>

//               <p>Let's get started with course At ₹{course.price}</p>

//               {user && user.subscription.includes(course._id) ? (
//                 <button
//                   onClick={() => navigate(`/course/study/${course._id}`)}
//                   className="common-btn"
//                 >
//                   Study
//                 </button>
//               ) : (
//                 <button onClick={checkoutHandler} className="common-btn">
//                   Buy Now
//                 </button>
//               )}
//             </div>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default CourseDescription;


import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);

    const {
      data: { order },
    } = await axios.post(
      `${server}/api/course/checkout/${params.id}`,
      {},
      {
        headers: {
          token,
        },
      }
    );

    const options = {
      key: "rzp_test_gZRo6YQ1JUCGd8", // Enter the Key ID generated from the Dashboard
      amount: order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "E learning", //your business name
      description: "Learn with us",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        try {
          const { data } = await axios.post(
            `${server}/api/verification/${params.id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
            {
              headers: {
                token,
              },
            }
          );

          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          toast.success(data.message);
          setLoading(false);
          navigate(`/payment-success/${razorpay_payment_id}`);
        } catch (error) {
          toast.error(error.response.data.message);
          setLoading(false);
        }
      },
      theme: {
        color: "#8a4baf",
      },
    };
    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {course && (
            <div className="course-description">
              <div className="course-header">
                <img
                  src={`${server}/${course.image}`}
                  alt=""
                  className="course-image"
                />
                <div className="course-info">
                  <h2>{course.title}</h2>
                  <p>Instructor: {course.createdBy}</p>
                  <p>Duration: {course.duration} weeks</p>
                </div>
              </div>

              <p>{course.description}</p>

              <p>Let's get started with course At ₹{course.price}</p>

              {user && user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button onClick={checkoutHandler} className="common-btn">
                  Buy Now
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CourseDescription;