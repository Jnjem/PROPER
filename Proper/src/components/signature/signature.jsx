import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: (index = number) => ({
    opacity: 1,
    transition: {
      duration: 0.3 * (index + 1),
    },
  }),
};

export default function Signature() {
  return (
    <div className="w-full h-full">
      <motion.svg
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1333.3333 533.33331"
        className="h-[120px] lg:h-[160px] w-[300px] lg:w-[400px]"
        xmlSpace="preserve"
        id="svg2"
        version="1.1"
        viewport={{ once: true }}
      >
        <metadata id="metadata8">
          <rdf:RDF>
            <cc:Work rdf:about="">
              <dc:format>image/svg+xml</dc:format>
              <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            </cc:Work>
          </rdf:RDF>
        </metadata>
        <defs id="defs6">
          <clipPath id="clipPath18" clipPathUnits="userSpaceOnUse">
            <path id="path16" d="M 0,400 H 1000 V 0 H 0 Z" />
          </clipPath>
        </defs>
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,533.33333)" id="g10">
          <g id="g12">
            <g clipPath="url(#clipPath18)" id="g14">
              <g transform="translate(149.2192,132.875)" id="g20">
                <motion.path
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  id="path22"
                  style={{
                    fill: 'none',  // Ensure there's no fill to make the stroke visible
                    stroke: '#ffffff', // Set the stroke color
                    strokeWidth: 8, // Set stroke width to make it visible
                  }}
                  d="m 0,0 c -26.098,-29.141 -36.172,-27.789 -37.186,-27.552 -2.468,0.575 -3.989,4.868 -4.666,7.404 C -48.951,5.747 -7.674,37.963 49.863,68.186 34.515,43.609 17.105,19.1 0,0 m 528.753,142.66 c -3.584,2.805 -8.755,2.163 -11.561,-1.42 -6.457,-8.283 -78.666,-48.241 -146.717,-56.456 -10.683,-1.284 -18.627,0.237 -23.528,4.598 -8.891,7.809 -8.959,25.354 -9.027,38.133 -0.033,12.271 -0.067,21.973 -7.639,25.996 -4.429,2.333 -9.568,1.589 -15.315,-2.265 -10.987,-7.302 -18.829,-14.942 -24.61,-21.196 2.028,9.567 2.941,19.911 -4.868,25.996 -10.784,8.384 -23.055,-5.949 -45.333,-32.013 -6.897,-8.046 -16.971,-19.811 -24.341,-26.842 4.902,12.508 16.261,33.501 27.35,51.046 0.033,0.068 0.067,0.136 0.101,0.203 0.135,0.237 0.236,0.474 0.338,0.71 0.169,0.338 0.304,0.642 0.406,0.98 0,0.034 0.033,0.068 0.033,0.102 1.082,3.448 -0.236,7.336 -3.448,9.364 -2.434,1.555 -5.408,1.623 -7.843,0.473 -16.023,-5.037 -78.733,-25.32 -141.983,-53.548 14.57,28.431 24.069,53.515 23.63,66.969 -0.034,1.352 -0.169,2.569 -0.406,3.651 -1.69,7.674 -7.505,11.9 -15.111,11.224 -0.608,-0.068 -1.251,-0.169 -1.859,-0.271 -54.393,-7.978 -96.076,-25.185 -108.279,-30.628 -2.739,-0.811 -5.037,-2.873 -5.848,-5.679 -1.049,-3.685 0.675,-7.404 3.853,-9.229 0.034,-0.034 0.068,-0.034 0.102,-0.068 0.304,-0.169 0.642,-0.304 0.98,-0.439 0.236,-0.101 0.507,-0.203 0.777,-0.304 0.068,0 0.102,-0.034 0.169,-0.068 5.646,-1.521 16.748,-4.948 16.748,-4.948 0.068,0.068 19.12,-7.898 22.366,-0.427 3.414,7.674 -12.103,14.266 -12.171,14.198 24.678,9.263 53.008,16.599 82.52,20.926 C 98.442,160.509 85.123,129.577 65.583,94.825 -5.443,60.478 -69.167,17.139 -57.706,-24.509 c 3.448,-12.61 11.291,-19.607 21.534,-19.607 1.961,0 4.023,0.236 6.152,0.777 27.315,6.728 74.44,68.051 107.401,125.318 44.894,21.398 95.771,41.073 140.327,55.914 -13.15,-22.819 -23.935,-46.314 -19.641,-56.117 1.521,-3.516 4.598,-5.95 8.384,-6.66 10.479,-1.961 21.669,9.533 46.212,38.234 6.795,7.944 16.227,18.931 22.447,24.779 -0.474,-3.38 -1.454,-7.403 -2.028,-9.871 -2.266,-9.431 -4.395,-18.39 2.535,-23.427 8.756,-6.355 16.226,2.062 22.176,8.857 5.308,6.018 12.44,14.097 23.563,21.974 0.101,-2.57 0.135,-5.646 0.135,-8.215 0.068,-15.923 0.169,-37.693 14.57,-50.404 6.897,-6.085 16.159,-9.162 27.586,-9.162 2.806,0 5.746,0.203 8.823,0.575 68.05,8.215 146.783,48.68 157.702,62.642 2.807,3.583 2.164,8.756 -1.419,11.562"
                />
              </g>
              <g transform="translate(285.7383,135.4521)" id="g24">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 1 }
                  id="path26"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c 0,-1.54 -0.175,-2.991 -0.521,-4.349 -0.347,-1.359 -0.95,-2.545 -1.81,-3.555 -0.863,-1.013 -2.024,-1.813 -3.491,-2.402 -1.463,-0.589 -3.312,-0.882 -5.545,-0.882 -2.058,0 -3.822,0.249 -5.3,0.748 -1.484,0.497 -2.706,1.077 -3.671,1.743 l 2.354,5.48 c 0.876,-0.513 1.814,-0.965 2.812,-1.359 0.994,-0.393 2.082,-0.588 3.259,-0.588 1.724,0 2.958,0.421 3.716,1.269 0.753,0.843 1.132,2.263 1.132,4.257 V 20.835 H 0 Z"
                />
              </g>
              <g transform="translate(321.5913,149.1763)" id="g28">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 2 }
                  id="path30"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c -0.159,-0.455 -0.391,-1.076 -0.692,-1.86 -0.306,-0.785 -0.652,-1.691 -1.039,-2.72 -0.388,-1.028 -0.819,-2.161 -1.3,-3.398 -0.481,-1.236 -0.966,-2.532 -1.463,-3.888 h 8.98 C 4.005,-10.505 3.541,-9.206 3.088,-7.965 2.64,-6.725 2.208,-5.59 1.805,-4.562 1.402,-3.533 1.043,-2.628 0.738,-1.844 0.432,-1.06 0.187,-0.446 0,0 m 8.487,-24.278 c -0.346,1.09 -0.725,2.21 -1.125,3.361 -0.403,1.148 -0.802,2.293 -1.201,3.432 h -12.26 c -0.395,-1.144 -0.795,-2.291 -1.193,-3.442 -0.396,-1.152 -0.767,-2.268 -1.113,-3.351 h -7.338 c 1.182,3.381 2.302,6.506 3.362,9.376 1.063,2.869 2.098,5.572 3.112,8.108 1.015,2.536 2.017,4.944 2.999,7.226 0.986,2.279 2.009,4.506 3.068,6.679 h 6.698 c 1.031,-2.173 2.049,-4.4 3.047,-6.679 1.002,-2.282 2.013,-4.69 3.027,-7.226 1.019,-2.536 2.058,-5.239 3.118,-8.108 1.062,-2.87 2.183,-5.995 3.369,-9.376 z"
                />
              </g>
              <g transform="translate(365.4707,124.8979)" id="g32">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 3 }
                  id="path34"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c -1.25,2.636 -2.485,5.372 -3.699,8.209 -1.214,2.834 -2.371,5.641 -3.463,8.416 -1.096,2.774 -2.098,5.433 -3.015,7.971 -0.921,2.538 -1.711,4.801 -2.38,6.794 h 7.79 c 0.591,-1.817 1.243,-3.775 1.96,-5.869 0.721,-2.096 1.454,-4.185 2.2,-6.264 0.746,-2.082 1.463,-4.077 2.143,-5.984 0.685,-1.906 1.34,-3.552 1.964,-4.94 0.591,1.378 1.234,3.021 1.935,4.926 0.701,1.907 1.422,3.902 2.168,5.983 0.745,2.08 1.479,4.168 2.2,6.264 0.717,2.097 1.373,4.056 1.964,5.884 h 7.521 C 18.583,29.387 17.776,27.12 16.859,24.588 15.947,22.056 14.944,19.399 13.857,16.621 12.769,13.842 11.624,11.035 10.414,8.195 9.208,5.357 7.981,2.625 6.739,0 Z"
                />
              </g>
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 4 }
                  id="path36"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 406.136,156.288 h 7.069 v -31.39 h -7.069 z"
                />
              <g transform="translate(437.7969,124.8979)" id="g38">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 5 }
                  id="path40"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 V 31.39 H 21.202 V 25.456 H 7.068 V 19.295 H 19.613 V 13.498 H 7.068 V 5.934 H 22.241 V 0 Z"
                />
              </g>
              <g transform="translate(492.1958,150.6265)" id="g42">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 6 }
                  id="path44"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c -0.513,0 -0.974,-0.016 -1.381,-0.045 -0.408,-0.03 -0.79,-0.061 -1.153,-0.091 v -8.515 h 1.992 c 2.657,0 4.559,0.332 5.708,0.996 1.145,0.664 1.719,1.796 1.719,3.398 0,1.54 -0.578,2.633 -1.743,3.283 C 3.98,-0.326 2.265,0 0,0 m -0.407,6.024 c 4.714,0 8.319,-0.837 10.829,-2.514 2.505,-1.677 3.756,-4.28 3.756,-7.814 0,-2.204 -0.505,-3.993 -1.515,-5.366 -1.015,-1.375 -2.469,-2.455 -4.372,-3.239 0.635,-0.786 1.299,-1.685 1.993,-2.695 0.696,-1.013 1.381,-2.07 2.061,-3.172 0.68,-1.102 1.336,-2.249 1.972,-3.443 0.632,-1.194 1.223,-2.363 1.764,-3.51 h -7.9 c -0.575,1.027 -1.157,2.068 -1.748,3.125 -0.591,1.058 -1.198,2.084 -1.821,3.081 -0.619,0.996 -1.235,1.94 -1.841,2.831 -0.607,0.89 -1.21,1.699 -1.818,2.424 H -2.534 V -25.729 H -9.603 V 5.209 c 1.54,0.301 3.133,0.513 4.779,0.633 1.646,0.121 3.121,0.182 4.417,0.182"
                />
              </g>
              <g transform="translate(566.709,156.2876)" id="g46">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 7 }
                  id="path48"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c 0.546,-0.996 1.174,-2.227 1.887,-3.691 0.709,-1.465 1.45,-3.05 2.224,-4.757 0.77,-1.705 1.536,-3.448 2.294,-5.231 0.758,-1.782 1.467,-3.457 2.135,-5.028 0.664,1.571 1.377,3.246 2.135,5.028 0.754,1.783 1.519,3.526 2.294,5.231 0.769,1.707 1.511,3.292 2.224,4.757 0.713,1.464 1.34,2.695 1.886,3.691 h 6.43 c 0.302,-2.084 0.583,-4.417 0.839,-6.998 0.256,-2.583 0.481,-5.27 0.68,-8.063 0.196,-2.792 0.375,-5.593 0.542,-8.402 0.167,-2.808 0.31,-5.452 0.432,-7.927 h -6.886 c -0.089,3.05 -0.211,6.372 -0.362,9.966 -0.15,3.593 -0.379,7.217 -0.681,10.87 -0.546,-1.267 -1.152,-2.673 -1.816,-4.213 -0.668,-1.54 -1.324,-3.08 -1.977,-4.62 -0.651,-1.54 -1.279,-3.011 -1.885,-4.417 -0.608,-1.403 -1.122,-2.603 -1.545,-3.599 H 5.912 c -0.424,0.996 -0.941,2.196 -1.544,3.599 -0.607,1.406 -1.234,2.877 -1.887,4.417 -0.651,1.54 -1.311,3.08 -1.975,4.62 -0.668,1.54 -1.276,2.946 -1.818,4.213 -0.301,-3.653 -0.529,-7.277 -0.68,-10.87 -0.151,-3.594 -0.273,-6.916 -0.362,-9.966 H -9.24 c 0.122,2.475 0.264,5.119 0.432,7.927 0.162,2.809 0.346,5.61 0.541,8.402 0.197,2.793 0.424,5.48 0.681,8.063 0.257,2.581 0.534,4.914 0.84,6.998 z"
                />
              </g>
              <g transform="translate(628.9268,149.1763)" id="g50">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 8 }
                  id="path52"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c -0.159,-0.455 -0.391,-1.076 -0.692,-1.86 -0.306,-0.785 -0.653,-1.691 -1.039,-2.72 -0.387,-1.028 -0.819,-2.161 -1.3,-3.398 -0.481,-1.236 -0.966,-2.532 -1.463,-3.888 h 8.98 C 4.005,-10.505 3.541,-9.206 3.089,-7.965 2.641,-6.725 2.208,-5.59 1.805,-4.562 1.401,-3.533 1.043,-2.628 0.737,-1.844 0.432,-1.06 0.187,-0.446 0,0 m 8.487,-24.278 c -0.346,1.09 -0.725,2.21 -1.125,3.361 -0.403,1.148 -0.802,2.293 -1.202,3.432 H -6.099 c -0.395,-1.144 -0.795,-2.291 -1.194,-3.442 -0.394,-1.152 -0.766,-2.268 -1.112,-3.351 h -7.337 c 1.18,3.381 2.302,6.506 3.36,9.376 1.064,2.869 2.099,5.572 3.113,8.108 1.015,2.536 2.017,4.944 2.998,7.226 0.987,2.279 2.009,4.506 3.069,6.679 h 6.698 c 1.03,-2.173 2.049,-4.4 3.047,-6.679 1.003,-2.282 2.013,-4.69 3.027,-7.226 1.019,-2.536 2.058,-5.239 3.118,-8.108 1.063,-2.87 2.183,-5.995 3.369,-9.376 z"
                />
              </g>
              <g transform="translate(675.9639,150.6265)" id="g54">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 9 }
                  id="path56"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c -0.514,0 -0.974,-0.016 -1.381,-0.045 -0.407,-0.03 -0.791,-0.061 -1.153,-0.091 v -8.515 h 1.992 c 2.656,0 4.56,0.332 5.708,0.996 1.146,0.664 1.72,1.796 1.72,3.398 0,1.54 -0.579,2.633 -1.744,3.283 C 3.98,-0.326 2.266,0 0,0 m -0.407,6.024 c 4.714,0 8.319,-0.837 10.829,-2.514 2.506,-1.677 3.757,-4.28 3.757,-7.814 0,-2.204 -0.506,-3.993 -1.516,-5.366 -1.015,-1.375 -2.47,-2.455 -4.372,-3.239 0.636,-0.786 1.3,-1.685 1.992,-2.695 0.697,-1.013 1.382,-2.07 2.062,-3.172 0.68,-1.102 1.337,-2.249 1.972,-3.443 0.631,-1.194 1.222,-2.363 1.764,-3.51 h -7.9 c -0.575,1.027 -1.157,2.068 -1.747,3.125 -0.591,1.058 -1.199,2.084 -1.822,3.081 -0.619,0.996 -1.234,1.94 -1.841,2.831 -0.608,0.89 -1.21,1.699 -1.818,2.424 H -2.534 V -25.729 H -9.603 V 5.209 c 1.54,0.301 3.133,0.513 4.779,0.633 1.646,0.121 3.121,0.182 4.417,0.182"
                />
              </g>
              <g transform="translate(736.751,156.2876)" id="g58">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 10 }
                  id="path60"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 V -6.024 H -9.468 V -31.39 h -7.065 v 25.366 h -9.468 V 0 Z"
                />
              </g>
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 11 }
                  id="path62"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 758.63,156.288 h 7.069 v -31.39 h -7.069 z m 9.151,8.244 -7.452,-6.297 -3.1,2.765 6.409,7.337 z"
                />
              <g transform="translate(811.3545,124.8979)" id="g64">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 12 }
                  id="path66"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c -2.021,3.593 -4.213,7.142 -6.567,10.644 -2.356,3.503 -4.861,6.81 -7.517,9.92 V 0 h -6.979 v 31.39 h 5.752 c 0.998,-0.996 2.098,-2.219 3.308,-3.669 1.206,-1.449 2.437,-2.997 3.691,-4.643 1.255,-1.646 2.499,-3.351 3.737,-5.119 1.238,-1.766 2.404,-3.465 3.487,-5.095 V 31.39 H 5.937 L 5.937,0 Z"
                />
              </g>
              <g transform="translate(841.8828,124.8979)" id="g68">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 13 }
                  id="path70"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 V 31.39 H 21.202 V 25.456 H 7.069 V 19.295 H 19.613 V 13.498 H 7.069 V 5.934 h 15.172 l 0,-5.934 z"
                />
              </g>
              <g transform="translate(909.332,151.3965)" id="g72">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 14 }
                  id="path74"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c -0.966,-0.996 -2.115,-2.288 -3.443,-3.873 -1.332,-1.586 -2.705,-3.314 -4.127,-5.186 -1.418,-1.874 -2.824,-3.805 -4.213,-5.797 -1.389,-1.995 -2.628,-3.897 -3.716,-5.708 H 0.497 v -5.935 h -24.685 v 4.213 c 0.846,1.54 1.881,3.253 3.104,5.141 1.222,1.887 2.497,3.79 3.825,5.707 1.328,1.918 2.681,3.774 4.054,5.571 1.373,1.797 2.652,3.404 3.83,4.824 H -23.464 V 4.891 L 0,4.891 Z"
                />
              </g>
              {/* inicio de "Acoustic" */}
              <g transform="translate(701.4092,87.6714)" id="g76">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 28 }
                  id="path78"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 -2.99,11.581 -5.977,0 Z M 0.693,-2.701 H -6.668 L -8.192,-8.61 h -2.037 l 6.271,23.635 h 1.96 L 4.292,-8.61 H 2.216 Z"
                />
              </g>
              <g transform="translate(722.8174,90.8789)" id="g80">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 29 }
                  id="path82"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c 0,6.989 3.126,12.087 7.343,12.087 2.136,0 3.994,-1.249 5.261,-3.68 L 11.319,6.28 C 10.25,8.205 8.944,9.083 7.422,9.083 4.293,9.083 1.979,5.233 1.979,0 c 0,-5.233 2.314,-9.083 5.443,-9.083 1.522,0 2.828,0.912 3.897,2.836 l 1.285,-2.127 C 11.337,-10.805 9.479,-12.087 7.321,-12.087 3.126,-12.087 0,-6.989 0,0"
                />
              </g>
              <g transform="translate(765.9512,90.8789)" id="g84">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 30 }
                  id="path86"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c 0,5.233 -2.296,9.083 -5.364,9.083 -3.106,0 -5.402,-3.85 -5.402,-9.083 0,-5.233 2.296,-9.083 5.402,-9.083 C -2.296,-9.083 0,-5.233 0,0 m -12.744,0 c 0,6.921 3.127,12.087 7.38,12.087 4.216,0 7.343,-5.131 7.343,-12.087 0,-6.956 -3.127,-12.087 -7.343,-12.087 -4.253,0 -7.38,5.165 -7.38,12.087"
                />
              </g>
              <g transform="translate(787.2197,89.2578)" id="g88">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 31 }
                  id="path90"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 V 13.438 H 1.979 V 0.135 c 0,-5.233 1.406,-7.596 3.899,-7.596 2.494,0 3.918,2.363 3.918,7.596 v 13.303 h 1.919 V 0 C 11.715,-6.854 9.52,-10.466 5.857,-10.466 2.216,-10.466 0,-6.854 0,0"
                />
              </g>
              <g transform="translate(818.1055,81.7627)" id="g92">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 32 }
                  id="path94"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 0.733,2.633 c 1.03,-1.587 2.791,-2.735 4.57,-2.735 2.396,0 3.425,1.588 3.425,3.647 0,5.773 -8.39,2.127 -8.39,10.906 0,3.646 1.662,6.753 5.303,6.753 1.623,0 3.303,-0.743 4.454,-2.094 L 9.44,16.409 c -1.209,1.317 -2.572,1.925 -3.799,1.925 -2.354,0 -3.365,-1.688 -3.365,-3.748 0,-5.773 8.391,-2.161 8.391,-10.838 0,-3.613 -1.701,-6.719 -5.364,-6.719 C 3.188,-2.971 1.108,-1.756 0,0"
                />
              </g>
              <g transform="translate(850.5957,99.7588)" id="g96">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 33 }
                  id="path98"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 H -4.75 V 2.938 H 6.707 V 0 H 1.957 V -20.697 H 0 Z"
                />
              </g>
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 34 }
                  id="path100"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 875.84,102.696 h 1.979 V 79.061 h -1.979 z"
                />
              <g transform="translate(897.2246,90.8789)" id="g102">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 35 }
                  id="path104"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c 0,6.989 3.127,12.087 7.343,12.087 2.137,0 3.995,-1.249 5.261,-3.68 L 11.319,6.28 C 10.251,8.205 8.944,9.083 7.422,9.083 4.293,9.083 1.979,5.233 1.979,0 c 0,-5.233 2.314,-9.083 5.443,-9.083 1.522,0 2.829,0.912 3.897,2.836 l 1.285,-2.127 C 11.338,-10.805 9.48,-12.087 7.322,-12.087 3.127,-12.087 0,-6.989 0,0"
                />
              </g>
              {/* final de "Acoustic" */}
              {/* inicio de "&" */}
              <g transform="translate(644.9014,97.6655)" id="g106">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 27 }
                  id="path108"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 C 0,-1.216 0.277,-2.094 1.404,-4.052 3.225,-2.296 3.82,-1.216 3.82,0.27 3.82,1.823 3.166,2.87 1.979,2.87 0.733,2.87 0,1.688 0,0 M 4.887,-13.945 0.95,-7.259 c -1.939,-1.858 -2.554,-3.242 -2.554,-5.133 0,-2.262 1.248,-3.781 3.108,-3.781 1.325,0 2.493,0.743 3.383,2.228 m 2.97,-5.031 -1.841,3.141 c -1.208,-1.993 -2.791,-3.039 -4.63,-3.039 -2.811,0 -4.848,2.532 -4.848,6.145 0,2.903 0.969,4.929 3.362,7.259 -1.246,2.127 -1.663,3.646 -1.663,5.402 0,3.174 1.468,5.301 3.742,5.301 2.097,0 3.443,-1.857 3.443,-4.929 0,-2.398 -0.831,-4.119 -2.946,-6.179 l 3.421,-5.808 c 0.377,1.216 0.673,2.634 0.852,4.288 L 8.271,-8.239 C 8.034,-10.332 7.62,-12.155 7.066,-13.641 l 1.858,-3.173 z"
                />
              </g>
              {/* final de "&" */}
              {/* inicio de "Architecture" */}
              <g transform="translate(275.6318,87.6714)" id="g110">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 15 }
                  id="path112"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 -2.987,11.581 -5.976,0 Z M 0.691,-2.701 H -6.67 L -8.192,-8.61 h -2.04 l 6.274,23.635 H -2 L 4.295,-8.61 H 2.216 Z"
                />
              </g>
              <g transform="translate(307.5649,94.458)" id="g114">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 16 }
                  id="path116"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 C 0,3.376 -1.327,5.301 -3.86,5.301 H -7.222 V -5.335 H -3.86 C -1.327,-5.335 0,-3.377 0,0 m 0.061,-15.396 -2.99,7.259 c -0.277,-0.034 -0.572,-0.068 -0.87,-0.068 h -3.423 v -7.191 H -9.2 V 8.238 h 5.401 c 3.601,0 5.778,-3.106 5.778,-8.238 0,-3.646 -1.108,-6.28 -3.047,-7.462 l 3.284,-7.934 z"
                />
              </g>
              <g transform="translate(328.0024,90.8789)" id="g118">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 17 }
                  id="path120"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c 0,6.989 3.126,12.087 7.343,12.087 2.137,0 3.994,-1.249 5.261,-3.68 L 11.319,6.28 C 10.25,8.205 8.944,9.083 7.422,9.083 4.293,9.083 1.979,5.233 1.979,0 c 0,-5.233 2.314,-9.083 5.443,-9.083 1.522,0 2.828,0.912 3.897,2.836 l 1.285,-2.127 C 11.337,-10.805 9.48,-12.087 7.322,-12.087 3.126,-12.087 0,-6.989 0,0"
                />
              </g>
              <g transform="translate(371.7295,102.6963)" id="g122">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 18 }
                  id="path124"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 v -23.635 h -1.979 v 10.534 H -9.931 V -23.635 H -11.91 V 0 h 1.979 v -10.163 h 7.952 l 0,10.163 z"
                />
              </g>
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 19 }
                  id="path126"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 392.268,102.696 h 1.979 V 79.061 h -1.979 z"
                />
              <g transform="translate(417.5308,99.7588)" id="g128">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 20 }
                  id="path130"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 H -4.749 V 2.938 H 6.709 V 0 H 1.96 V -20.697 H 0 Z"
                />
              </g>
              <g transform="translate(452.8306,81.999)" id="g132">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 21 }
                  id="path134"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 v -2.938 h -10.052 v 23.635 h 9.773 V 17.76 H -8.074 V 10.5 h 6.945 V 7.63 H -8.074 V 0 Z"
                />
              </g>
              <g transform="translate(471.229,90.8789)" id="g136">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 22 }
                  id="path138"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 c 0,6.989 3.126,12.087 7.343,12.087 2.137,0 3.994,-1.249 5.261,-3.68 L 11.319,6.28 C 10.25,8.205 8.944,9.083 7.422,9.083 4.292,9.083 1.979,5.233 1.979,0 c 0,-5.233 2.313,-9.083 5.443,-9.083 1.522,0 2.828,0.912 3.897,2.836 l 1.285,-2.127 C 11.337,-10.805 9.48,-12.087 7.321,-12.087 3.126,-12.087 0,-6.989 0,0"
                />
              </g>
              <g transform="translate(505.6367,99.7588)" id="g140">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 23 }
                  id="path142"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 H -4.749 V 2.938 H 6.707 V 0 H 1.958 V -20.697 H 0 Z"
                />
              </g>
              <g transform="translate(530.5068,89.2578)" id="g144">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 24 }
                  id="path146"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 V 13.438 H 1.979 V 0.135 c 0,-5.233 1.404,-7.596 3.897,-7.596 2.493,0 3.918,2.363 3.918,7.596 v 13.303 h 1.921 V 0 c 0,-6.854 -2.197,-10.466 -5.858,-10.466 C 2.217,-10.466 0,-6.854 0,0"
                />
              </g>
              <g transform="translate(571.8594,94.458)" id="g148">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 25 }
                  id="path150"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="M 0,0 C 0,3.376 -1.327,5.301 -3.859,5.301 H -7.221 V -5.335 h 3.362 C -1.327,-5.335 0,-3.377 0,0 m 0.061,-15.396 -2.99,7.259 c -0.276,-0.034 -0.572,-0.068 -0.87,-0.068 h -3.422 v -7.191 H -9.2 V 8.238 h 5.401 c 3.602,0 5.778,-3.106 5.778,-8.238 0,-3.646 -1.108,-6.28 -3.047,-7.462 l 3.285,-7.934 z"
                />
              </g>
              <g transform="translate(603.4766,81.999)" id="g152">
                <motion.path
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={ 26 }
                  id="path154"
                  style={{ fill: '#ffffff', fillOpacity: 1, fillRule: 'nonzero', stroke: 'none' }}
                  d="m 0,0 v -2.938 h -10.053 v 23.635 h 9.779 V 17.76 h -7.8 V 10.5 h 6.947 V 7.63 H -8.074 V 0 Z"
                />
              </g>
              {/* final de "Architecture" */}
            </g>
          </g>
        </g>
      </motion.svg>
    </div>
  );
}
