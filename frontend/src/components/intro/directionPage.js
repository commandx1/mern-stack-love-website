import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./direction.css";

const DirectionPage = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 12000);
  });

  useEffect(() => {
    document.querySelector(".push").setAttribute("style", "display: none");
    document.querySelector("footer").setAttribute("style", "display: none");
    document
      .querySelector(".my-menu-button")
      .setAttribute("style", "display: none");
    return () => {
      document.querySelector(".push").setAttribute("style", "display: block");
      document.querySelector("footer").setAttribute("style", "display: block");
      document
        .querySelector(".my-menu-button")
        .setAttribute("style", "display: block");
    };
  });
  return (
    <div className="intro-wrapper">
      <div id="serhat">
        <svg
          id="logo1"
          width="77"
          height="112"
          viewBox="0 0 77 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2158 105.367L20.2358 105.376L20.2561 105.385C25.8235 107.814 32.0537 109.008 38.912 109.008C46.0846 109.008 52.4178 107.612 57.8463 104.744C63.2103 101.911 67.3416 98.1686 70.147 93.493C72.9198 88.8716 74.32 83.9094 74.32 78.64C74.32 72.0218 72.817 66.5438 69.5779 62.435C66.5116 58.4519 62.7972 55.4976 58.4384 53.6257C54.278 51.7453 48.8479 49.8923 42.1837 48.0571C36.7575 46.5338 32.5617 45.2126 29.5707 44.093C26.875 42.9571 24.5893 41.3567 22.6903 39.29C21.0617 37.4199 20.176 34.9473 20.176 31.696C20.176 27.1134 21.7026 23.7914 24.6147 21.4455L24.6276 21.4351L24.6404 21.4244C27.6638 18.905 31.6428 17.568 36.752 17.568C42.2654 17.568 46.4743 18.9633 49.5796 21.565L49.5919 21.5754L49.6044 21.5855C52.8332 24.2034 54.5229 27.124 54.9275 30.3601L55.1464 32.112H56.912H71.312H73.5193L73.3023 29.9154C72.4819 21.6085 68.8087 14.8657 62.3221 9.81809C55.9398 4.77661 47.7923 2.336 38.048 2.336C31.2831 2.336 25.1863 3.53055 19.799 5.97009L19.7924 5.97306L19.7859 5.97608C14.4859 8.42225 10.297 11.9212 7.29009 16.4834C4.27311 21.0609 2.78401 26.2981 2.78401 32.128C2.78401 38.6542 4.24031 44.1086 7.35508 48.2974L7.37233 48.3206L7.39024 48.3433C10.4563 52.2269 14.1201 55.1291 18.38 56.9993L18.3881 57.0028L18.3962 57.0063C22.5546 58.7885 27.9862 60.5452 34.6567 62.2856C39.9962 63.7159 44.1845 65.0368 47.251 66.2448C50.1434 67.3843 52.5138 69.031 54.4026 71.1773C56.1313 73.1417 57.072 75.7597 57.072 79.216C57.072 83.5407 55.4932 87.0182 52.2905 89.8003C49.207 92.4665 44.8307 93.92 38.912 93.92C32.702 93.92 28.2722 92.4177 25.3085 89.7129C22.3024 86.7839 20.5974 83.2441 20.1657 79.013L19.9823 77.216H18.176H4.20801H2.17261L2.20832 79.2511C2.3109 85.0985 3.96042 90.3407 7.18104 94.9119L7.1873 94.9208L7.19366 94.9296C10.3943 99.3692 14.7589 102.841 20.2158 105.367Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <svg
          id="logo2"
          width="63"
          height="109"
          viewBox="0 0 63 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.768 48.84V46.84H53.768H19.192V17.288H58.088H60.088V15.288V4.48801V2.48801H58.088H4.08801H2.08801V4.48801V105V107H4.08801H58.088H60.088V105V94.2V92.2H58.088H19.192V61.64H53.768H55.768V59.64V48.84Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <svg
          id="logo3"
          width="80"
          height="109"
          viewBox="0 0 80 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.2078 106.007L55.7864 107H56.936H72.632H76.1623L74.3475 103.972L50.536 64.2407C57.5638 62.2602 63.0685 58.7592 66.8847 53.6444C71.1895 48.0031 73.336 41.4795 73.336 34.152C73.336 28.1709 71.9637 22.7744 69.1729 18.0196C66.3553 13.2193 62.1027 9.4659 56.5279 6.72786C50.9953 3.96317 44.2873 2.63199 36.488 2.63199H4.08801H2.08801V4.63199V105V107H4.08801H17.192H19.192V105V65.96H31.8824L55.2078 106.007ZM51.0988 21.782L51.1087 21.7914L51.1188 21.8007C54.1653 24.6001 55.8 28.619 55.8 34.152C55.8 39.5669 54.1759 43.7264 51.0675 46.8401C48.0241 49.7948 43.29 51.448 36.488 51.448H19.192V17.432H36.488C43.4338 17.432 48.1659 19.0121 51.0988 21.782Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <svg
          id="logo4"
          width="86"
          height="109"
          viewBox="0 0 86 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.416 4.63199V2.63199H81.416H68.312H66.312V4.63199V46.696H19.192V4.63199V2.63199H17.192H4.08801H2.08801V4.63199V105V107H4.08801H17.192H19.192V105V61.496H66.312V105V107H68.312H81.416H83.416V105V4.63199Z"
            stroke="#FCFCFC"
            stroke-width="4"
          />
        </svg>

        <svg
          id="logo5"
          width="100"
          height="108"
          viewBox="0 0 100 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.576 106H20.98L21.457 104.68L29.044 83.68H70.0121L77.599 104.68L78.0761 106H79.48H93.304H96.1555L95.1845 103.319L59.0405 3.52692L58.5628 2.20801H57.16H42.04H40.6392L40.1604 3.52452L3.87243 103.317L2.89661 106H5.75201H19.576ZM34.2242 69.024L49.528 26.2705L64.8318 69.024H34.2242Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <svg
          id="logo6"
          width="77"
          height="109"
          viewBox="0 0 77 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74.864 4.63199V2.63199H72.864H4.896H2.896V4.63199V15.288V17.288H4.896H30.4V105V107H32.4H45.504H47.504V105V17.288H72.864H74.864V15.288V4.63199Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </div>
      <div id="kalp">
        <svg
          id="xd"
          fill="none"
          stroke="white"
          stroke-width="4"
          width="300"
          height="200"
        >
          <polygon points="100 100, 150 150, 200 100, 200 75, 185 60, 165 60, 150 75, 135 60, 115 60, 100 75, 100 100" />
        </svg>
      </div>
      <div id="ceren">
        <svg
          width="107"
          height="111"
          viewBox="0 0 107 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.8191 9.22619L27.8191 9.22616L27.8096 9.23165C19.9095 13.8317 13.6595 20.2371 9.07426 28.409C4.47309 36.513 2.19202 45.6415 2.19202 55.744C2.19202 65.8485 4.47396 74.9785 9.07689 83.0836C13.6639 91.1608 19.9142 97.515 27.8096 102.112L27.8225 102.12L27.8355 102.127C35.832 106.625 44.6688 108.864 54.304 108.864C65.5763 108.864 75.511 106.19 84.0325 100.776L84.0395 100.772L84.0465 100.767C92.5809 95.2449 98.7925 87.4609 102.679 77.4947L103.743 74.768H100.816H85.12H83.8389L83.3033 75.9317C80.6721 81.6477 76.8958 85.9899 71.9774 89.0317C67.166 91.9709 61.3046 93.488 54.304 93.488C47.6201 93.488 41.6866 91.9355 36.4515 88.8666C31.2192 85.7994 27.1068 81.4721 24.1048 75.8344C21.1119 70.1184 19.584 63.4403 19.584 55.744C19.584 47.9438 21.115 41.2708 24.1015 35.6597L24.1015 35.6597L24.1077 35.648C27.1124 29.9117 31.2255 25.5409 36.4515 22.4774C41.6866 19.4085 47.6201 17.856 54.304 17.856C61.2958 17.856 67.15 19.417 71.9584 22.4445L71.9654 22.4489L71.9724 22.4532C76.8933 25.4952 80.6712 29.8384 83.3033 35.5563L83.8389 36.72H85.12H100.816H103.732L102.682 33.9996C98.7969 23.9387 92.5861 16.1025 84.0465 10.5769C75.5232 5.06177 65.5834 2.336 54.304 2.336C44.6607 2.336 35.8181 4.62674 27.8191 9.22619Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <svg
          width="63"
          height="109"
          viewBox="0 0 63 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.768 48.84V46.84H53.768H19.192V17.288H58.088H60.088V15.288V4.48801V2.48801H58.088H4.08801H2.08801V4.48801V105V107H4.08801H58.088H60.088V105V94.2V92.2H58.088H19.192V61.64H53.768H55.768V59.64V48.84Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <svg
          width="80"
          height="109"
          viewBox="0 0 80 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.2078 106.007L55.7864 107H56.936H72.632H76.1623L74.3475 103.972L50.536 64.2407C57.5638 62.2602 63.0685 58.7592 66.8847 53.6444C71.1895 48.0031 73.336 41.4795 73.336 34.152C73.336 28.1709 71.9637 22.7744 69.1729 18.0196C66.3553 13.2193 62.1027 9.4659 56.5279 6.72786C50.9953 3.96317 44.2873 2.63199 36.488 2.63199H4.08801H2.08801V4.63199V105V107H4.08801H17.192H19.192V105V65.96H31.8824L55.2078 106.007ZM51.0988 21.782L51.1087 21.7914L51.1188 21.8007C54.1653 24.6001 55.8 28.619 55.8 34.152C55.8 39.5669 54.1759 43.7264 51.0675 46.8401C48.0241 49.7948 43.29 51.448 36.488 51.448H19.192V17.432H36.488C43.4338 17.432 48.1659 19.0121 51.0988 21.782Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <svg
          width="63"
          height="109"
          viewBox="0 0 63 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.768 48.84V46.84H53.768H19.192V17.288H58.088H60.088V15.288V4.48801V2.48801H58.088H4.08801H2.08801V4.48801V105V107H4.08801H58.088H60.088V105V94.2V92.2H58.088H19.192V61.64H53.768H55.768V59.64V48.84Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
        <svg
          width="87"
          height="109"
          viewBox="0 0 87 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83 107H85V105V4.48801V2.48801H83H69.896H67.896V4.48801V77.6084L18.8607 3.38557L18.2678 2.48801H17.192H4.08801H2.08801V4.48801V105V107H4.08801H17.192H19.192V105V31.7457L68.2264 106.101L68.8192 107H69.896H83Z"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </div>
    </div>
  );
};

export default DirectionPage;
