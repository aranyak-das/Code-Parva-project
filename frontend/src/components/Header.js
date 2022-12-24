import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <nav>
      <h3 href="/">
        <svg
          id="logo-74"
          width="70"
          height="44"
          viewBox="0 0 70 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="ccustom"
            d="M65.5268 5.40852C65.5268 5.45982 65.5268 5.52395 65.5137 5.56243C65.4481 6.06264 65.4481 6.56285 65.4874 7.07589C65.5137 7.20415 65.5399 7.33241 65.6449 7.43502C65.8154 7.6274 66.0777 7.58893 66.1827 7.35806C66.2352 7.24263 66.2352 7.12719 66.2089 7.01176C66.0777 6.52437 66.0515 6.01134 66.0384 5.51112C66.0384 5.48547 66.0384 5.44699 66.0384 5.40852C66.1827 5.39569 66.3139 5.38286 66.4319 5.38286C66.5238 5.37004 66.6025 5.35721 66.6681 5.31873C66.8648 5.21613 66.8648 4.99809 66.6549 4.89548C66.5762 4.857 66.4713 4.84417 66.3795 4.84417C66.0515 4.857 65.7236 4.857 65.3956 4.857C65.2776 4.857 65.1595 4.86983 65.0414 4.88265C64.9758 4.89548 64.8971 4.89548 64.8447 4.93396C64.7528 4.97243 64.7004 5.03656 64.7004 5.12634C64.7135 5.21613 64.7528 5.26743 64.8447 5.30591C64.8971 5.34439 64.9627 5.35721 65.0283 5.35721C65.1857 5.37004 65.3563 5.39569 65.5268 5.40852ZM69.1342 5.99851C69.1342 6.01134 69.1473 6.02416 69.1473 6.02416C69.1998 6.37046 69.2523 6.70394 69.2916 7.03741C69.3048 7.15284 69.3179 7.25545 69.3966 7.34523C69.5671 7.56327 69.8295 7.53762 69.9475 7.30676C70 7.19132 70.0131 7.07589 69.9869 6.94763C69.9082 6.56285 69.8688 6.17807 69.7901 5.80612C69.7376 5.57525 69.6721 5.35721 69.6065 5.152C69.5671 5.02374 69.4753 4.93395 69.3179 4.92113C69.1605 4.89548 69.0424 4.97243 68.9768 5.08787C68.8981 5.19047 68.8325 5.29308 68.78 5.40852C68.6882 5.61373 68.6095 5.81895 68.5046 6.01134C68.4914 6.06264 68.4783 6.10112 68.4521 6.13959C68.439 6.11394 68.4259 6.10112 68.4259 6.10112C68.2553 5.78047 68.0979 5.45982 67.9274 5.152C67.9011 5.12634 67.888 5.10069 67.8749 5.07504C67.7962 4.95961 67.7044 4.89548 67.5601 4.89548C67.4289 4.9083 67.3239 4.98526 67.2584 5.10069C67.2321 5.152 67.2321 5.19047 67.219 5.24178C67.1665 5.65221 67.1009 6.06264 67.0485 6.47307C67.0222 6.70394 67.0091 6.9348 67.0091 7.16567C66.996 7.21697 67.0091 7.2811 67.0353 7.33241C67.0616 7.43501 67.1403 7.49915 67.2452 7.51197C67.3764 7.5248 67.4682 7.48632 67.5076 7.38371C67.5469 7.30676 67.5601 7.24263 67.5732 7.1785C67.6257 6.94763 67.665 6.72959 67.7044 6.51155C67.7306 6.38329 67.7437 6.28068 67.7831 6.13959C67.8093 6.1909 67.8355 6.22938 67.8618 6.26785C67.9798 6.42177 68.0979 6.57568 68.2422 6.70394C68.3865 6.80654 68.5046 6.79372 68.6226 6.67828C68.6489 6.65263 68.662 6.63981 68.6882 6.61415C68.8063 6.43459 68.9506 6.25503 69.0686 6.07546C69.0949 6.04981 69.108 6.02416 69.1342 5.99851Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M38.9087 5.6605C38.8175 5.90425 38.8001 6.07986 38.8422 6.22582C38.8887 6.4243 39.0094 6.48928 39.1732 6.4388C40.714 6.06627 44.0927 7.12367 45.3436 7.41838C45.6386 7.48026 45.8786 7.10791 45.6773 6.77407C45.3835 6.45077 42.0063 5.0666 40.7177 4.99113C40.2126 4.96322 39.3096 4.83658 38.9087 5.6605Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M52.1133 1.17982C52.2775 1.27249 52.3693 1.36089 52.4146 1.45966C52.4821 1.58922 52.4465 1.67886 52.3331 1.7246C51.3146 2.21062 49.9593 4.30303 49.4122 5.02468C49.2796 5.19069 48.9737 5.09422 48.9275 4.82122C48.937 4.51254 50.1384 2.24181 50.8089 1.62334C51.0724 1.38187 51.5077 0.908078 52.1133 1.17982Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M44.0023 0.149796C44.1996 0.00441887 44.4046 -0.0465256 44.5093 0.0479512C46.046 1.3329 46.8609 3.36773 47.3655 5.23057C47.3845 5.27397 47.3857 5.33625 47.3705 5.40122C47.3642 5.45675 47.3227 5.51541 47.2568 5.5608C47.1864 5.61091 47.1258 5.62617 47.0973 5.58299C46.4238 4.68732 42.5771 1.20242 44.0023 0.149796Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M11.461 22.4276C11.8293 22.1595 12.2297 21.9363 12.6534 21.7631C13.0967 21.6392 13.5692 21.6597 13.9995 21.8217C14.4297 21.9837 14.7944 22.2782 15.0382 22.6608C15.2563 23.0424 15.3416 23.483 15.2814 23.9162C15.2212 24.3493 15.0187 24.7516 14.7043 25.0625C14.4606 25.3145 14.1839 25.534 13.8816 25.7154C12.5342 26.5665 11.1748 27.3709 9.81547 28.222C9.53732 28.435 9.24225 28.6261 8.93308 28.7933C8.46281 29.0226 7.92537 29.084 7.41368 28.9669C6.902 28.8499 6.44826 28.5616 6.13092 28.1521C5.89369 27.8621 5.69348 27.545 5.53471 27.2077C4.24691 24.5612 2.91142 21.9263 1.67131 19.2331C1.09895 18.0673 0.633913 16.7265 0.180798 15.4324C-0.0152406 15.0564 -0.0535225 14.6205 0.0741037 14.2173C0.20173 13.8141 0.485195 13.4755 0.864201 13.2735C1.24321 13.0715 1.68785 13.0221 2.10357 13.1357C2.51929 13.2493 2.87329 13.517 3.09027 13.8818C3.75722 14.7484 4.34761 15.6689 4.85504 16.6333C6.14284 18.965 7.37103 21.2967 8.61113 23.5585C8.68334 23.6835 8.76296 23.8041 8.84961 23.9199C9.783 23.5362 10.6609 23.0345 11.461 22.4276Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M24.7761 21.6142C21.8309 24.9835 16.8943 24.1324 14.4141 19.7954C12.6493 16.7175 12.3393 11.6343 16.1789 8.42817C16.9988 7.75694 17.9792 7.29969 19.0287 7.09907C20.3155 6.9187 21.6277 7.14066 22.7777 7.73324C23.9277 8.32582 24.8567 9.25867 25.432 10.3985C27.5306 14.1293 27.2325 18.886 24.7761 21.6142ZM23.5837 13.7562C23.2708 12.8394 22.6431 12.0567 21.807 11.541C21.3339 11.2113 20.759 11.051 20.1792 11.0871C19.5993 11.1232 19.0499 11.3535 18.6233 11.7392C16.9182 13.2199 16.5604 16.7292 17.8005 18.8161C17.9586 19.1564 18.1907 19.4588 18.4808 19.7022C18.7709 19.9456 19.1119 20.1241 19.4799 20.2251C19.8479 20.3262 20.234 20.3474 20.6113 20.2873C20.9886 20.2271 21.3478 20.0871 21.664 19.877C22.5883 19.1763 23.2664 18.2115 23.604 17.1167C23.9417 16.0218 23.9221 14.8513 23.548 13.7679L23.5837 13.7562Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M36.7955 15.2252C36.494 15.2886 36.1825 15.2924 35.8794 15.2363C35.5764 15.1802 35.2878 15.0655 35.0308 14.8988C34.8059 14.773 34.6123 14.6001 34.4639 14.3924C34.3156 14.1847 34.2162 13.9475 34.1729 13.6977C34.1295 13.448 34.1434 13.192 34.2133 12.9481C34.2833 12.7042 34.4078 12.4785 34.5777 12.2872C34.8737 11.9028 35.2939 11.6276 35.7701 11.5061C37.0134 11.1533 38.2933 10.9382 39.5858 10.8649C39.8698 10.8326 40.1575 10.8561 40.432 10.934C40.7066 11.012 40.9624 11.1427 41.1846 11.3187C41.4067 11.4946 41.5907 11.7122 41.7257 11.9586C41.8606 12.205 41.9439 12.4753 41.9706 12.7536C42.3432 14.1206 42.384 15.5539 42.0898 16.9391C41.0167 21.416 37.3202 22.9549 33.1706 21.5209C32.0058 21.1375 30.9845 20.4231 30.2373 19.469C29.2407 18.32 28.5341 16.9583 28.1744 15.4934C27.883 14.1889 27.9149 12.8353 28.2676 11.5454C28.6202 10.2555 29.2833 9.06675 30.2015 8.07845C31.0729 7.00428 32.2039 6.15891 33.4926 5.61846C34.3069 5.17961 35.2598 5.05483 36.1636 5.2687C36.3686 5.32418 36.5547 5.43228 36.7026 5.58179C36.8505 5.73131 36.9548 5.91678 37.0047 6.11899C37.0546 6.32119 37.0482 6.53276 36.9863 6.73176C36.9243 6.93075 36.8091 7.10992 36.6525 7.25068C36.3547 7.51423 36.0312 7.74853 35.6866 7.9502C34.6265 8.61027 33.704 9.46082 32.9679 10.4568C32.4854 11.1013 32.1531 11.8414 31.9945 12.6249C31.8358 13.4084 31.8547 14.2164 32.0498 14.9921C32.3202 16.0497 32.9203 16.999 33.7668 17.7085C36.3901 20.0403 39.8004 17.7901 39.2042 14.6073C38.3338 14.8172 37.5706 15.0387 36.7955 15.2252Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M52.8217 21.8007C48.9464 24.1325 44.5345 21.8007 43.5686 16.9041C42.8651 13.4065 44.2006 8.50982 48.8749 6.64443C49.8694 6.25608 50.9481 6.11973 52.0109 6.24803C53.2878 6.47658 54.4592 7.09121 55.3598 8.00528C56.2604 8.91934 56.845 10.0867 57.0309 11.3429C57.8179 15.505 56.0293 19.947 52.8217 21.8007ZM54.1692 13.9544C54.168 12.9859 53.8176 12.0487 53.1795 11.3079C52.8384 10.8497 52.3453 10.5214 51.7843 10.3789C51.2232 10.2365 50.6291 10.2887 50.103 10.5268C48.0044 11.4128 46.5258 14.6306 47.0624 16.9974C47.1034 17.3688 47.2268 17.727 47.4241 18.0469C47.6214 18.3668 47.8878 18.6407 48.2047 18.8495C48.5215 19.0582 48.8812 19.1968 49.2585 19.2555C49.6359 19.3141 50.0218 19.2915 50.3892 19.1892C51.4985 18.8103 52.459 18.1022 53.1366 17.1637C53.8143 16.2252 54.1753 15.1032 54.1692 13.9544Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M60.9499 22.7801C60.8914 23.2068 60.662 23.5933 60.312 23.8546C59.962 24.1158 59.5202 24.2305 59.0838 24.1733C58.6474 24.1161 58.2521 23.8917 57.9849 23.5495C57.7176 23.2074 57.6004 22.7754 57.6589 22.3487C57.7174 21.922 57.9469 21.5355 58.2968 21.2742C58.6468 21.0129 59.0886 20.8983 59.525 20.9555C59.9614 21.0127 60.3567 21.237 60.624 21.5792C60.8912 21.9214 61.0085 22.3534 60.9499 22.7801ZM59.9125 7.05247C60.1393 6.71382 60.472 6.45593 60.861 6.31726C61.2499 6.17859 61.6743 6.16657 62.0708 6.283C62.4739 6.38161 62.83 6.61262 63.0797 6.93735C63.3293 7.26209 63.4572 7.66082 63.4421 8.06678C63.3895 8.71795 63.2899 9.36468 63.144 10.0021C62.7505 12.159 62.3689 14.3158 61.9516 16.4494C61.7608 17.3005 61.5104 18.1166 61.2361 18.9793C61.1407 19.249 60.9813 19.4927 60.7711 19.6905C60.6404 19.8393 60.4735 19.9534 60.2857 20.0223C60.0979 20.0913 59.8954 20.1128 59.6969 20.0849C59.4984 20.057 59.3102 19.9806 59.1499 19.8628C58.9896 19.7449 58.8623 19.5894 58.7798 19.4107C58.638 19.0901 58.561 18.7456 58.5532 18.3964C58.5532 16.9507 58.5532 15.4934 58.6486 14.036C58.8107 11.9562 59.1295 9.89088 59.6025 7.85692C59.6582 7.58442 59.7631 7.32383 59.9125 7.08745V7.05247Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.42311 32.1488C6.28232 32.4561 6.24371 32.7987 6.31251 33.1284C6.35828 33.563 6.45881 33.9905 6.61181 34.4011C6.80283 34.9039 7.01658 35.4011 7.28014 36.0139C7.34075 36.1549 7.40409 36.3021 7.47037 36.457C7.82579 37.2872 8.27175 38.3482 8.8666 39.8837C9.03497 40.3199 9.18448 40.7597 9.33504 41.2025C9.39586 41.3814 9.4569 41.5609 9.51938 41.7408C9.74334 42.3804 10.1287 42.955 10.6395 43.4104C10.8564 43.6607 11.1441 43.8431 11.4667 43.9343C11.7956 44.0273 12.1454 44.0214 12.4708 43.9174C12.7962 43.8133 13.082 43.6159 13.2911 43.3508C13.4961 43.0909 13.618 42.7777 13.6417 42.4505C13.7747 41.8131 13.7293 41.1522 13.5101 40.5377C13.1622 39.5174 12.7659 38.4956 12.3089 37.4962L12.3068 37.4918C11.555 35.9282 10.7908 34.3754 9.99044 32.822L9.98445 32.8111C9.75015 32.4064 9.44566 32.0446 9.08466 31.742C8.8503 31.4719 8.52703 31.2897 8.17003 31.2269C7.80542 31.1628 7.42938 31.2274 7.10904 31.4093C6.806 31.5785 6.56578 31.8374 6.42311 32.1488Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.9057 28.2986C16.7269 28.0001 15.4958 27.9566 14.2982 28.1712C13.3706 28.2605 12.4583 28.4697 11.8248 28.8841C11.5026 29.095 11.2421 29.3658 11.0972 29.71C10.9515 30.0561 10.9329 30.4519 11.0523 30.8929C11.2703 31.7007 11.5534 32.4861 11.8355 33.269L11.8812 33.3958L11.8823 33.3986C12.7317 35.673 13.5892 37.9397 14.4545 40.1986C14.5554 40.5546 14.6981 40.898 14.8797 41.2219L14.8831 41.2279C15.123 41.6303 15.4307 41.9902 15.7932 42.2925C15.9745 42.4587 16.1987 42.5737 16.4418 42.6251C16.6873 42.6769 16.9426 42.6619 17.1799 42.5815C17.4173 42.5012 17.6275 42.3587 17.7877 42.1695C17.9453 41.9834 18.0485 41.7592 18.0864 41.5206C18.2428 40.8724 18.1927 40.1929 17.9427 39.5733C17.8647 39.3648 17.8035 39.1517 17.739 38.9274C17.7175 38.8526 17.6957 38.7765 17.6727 38.699C19.6534 37.942 21.7609 36.9241 22.502 34.5561C22.7922 33.7378 22.8164 32.8517 22.5712 32.0193C22.3258 31.186 21.8223 30.4474 21.1301 29.9052C20.188 29.1462 19.0875 28.5978 17.9057 28.2986ZM14.6382 31.2031C14.6772 31.1921 14.7165 31.1819 14.7559 31.1724C16.0454 30.9742 17.3647 31.2383 18.4709 31.9159C18.9584 32.2474 19.1581 32.6157 19.1924 32.9701C19.2278 33.335 19.0921 33.7304 18.8195 34.1105C18.3044 34.8285 17.3644 35.4032 16.5153 35.5103C15.8963 34.1165 15.2677 32.6663 14.6382 31.2031Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M25.7646 25.7473C27.1684 25.1134 28.9073 25.0039 30.268 25.4496C30.6107 25.5472 30.908 25.7583 31.1091 26.0468C31.3089 26.3335 31.4011 26.679 31.3703 27.0244C31.3683 27.2486 31.312 27.4692 31.2061 27.6682C31.0983 27.8708 30.9422 28.045 30.751 28.1762C30.5598 28.3073 30.3391 28.3916 30.1076 28.4217C29.876 28.4519 29.6405 28.4271 29.4208 28.3494L29.4041 28.3435L29.3884 28.3354C29.276 28.2779 29.1566 28.2346 29.0331 28.2064L29.0253 28.2047C28.0681 27.9561 27.1652 28.368 26.8354 28.8741C26.6781 29.1154 26.6586 29.359 26.7896 29.5806C26.9299 29.8179 27.274 30.0842 27.9703 30.274C28.1618 30.3254 28.3581 30.375 28.5572 30.4254C29.1078 30.5648 29.68 30.7096 30.2333 30.9103L30.2354 30.9111C32.788 31.8607 33.7385 33.8274 33.4131 35.6772C33.0912 37.5065 31.5287 39.1713 29.179 39.564C28.324 39.7493 27.4342 39.7132 26.5977 39.4593C25.7591 39.2046 25.0032 38.7399 24.4051 38.1111L24.3895 38.0947C24.2007 37.8578 24.0737 37.5795 24.0174 37.2842C23.9656 37.0177 23.9929 36.7423 24.0959 36.4904C24.1983 36.24 24.3715 36.0233 24.595 35.8654C24.8311 35.6864 25.1157 35.579 25.4136 35.5566C25.7105 35.5343 26.0076 35.5974 26.2683 35.738C26.5287 35.861 26.7709 36.0179 26.9883 36.2045L26.9924 36.2079C27.377 36.5518 27.8423 36.6414 28.2885 36.5584C28.7412 36.4742 29.1669 36.2123 29.4407 35.8648C29.7127 35.5195 29.8219 35.1093 29.6923 34.7111C29.5619 34.31 29.1698 33.8606 28.3083 33.4849C28.0831 33.3914 27.8496 33.316 27.6067 33.2426C27.5412 33.2228 27.4746 33.2031 27.4072 33.1831C27.2276 33.1298 27.0428 33.0749 26.8616 33.0144C26.7368 32.9728 26.613 32.9334 26.4904 32.8943C26.1553 32.7876 25.8286 32.6836 25.5142 32.5441C24.8299 32.3163 24.2387 31.8789 23.8286 31.2966C23.4168 30.712 23.2096 30.0129 23.2378 29.3037C23.24 27.5754 24.3533 26.3847 25.7646 25.7473Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M43.5619 25.5632C43.2897 25.4332 42.9887 25.3715 42.6861 25.3836C42.3834 25.3958 42.0886 25.4814 41.8283 25.6329C41.5696 25.7833 41.353 25.9939 41.1978 26.246C41.0555 26.4583 40.957 26.6957 40.9079 26.945C40.8588 27.1941 40.86 27.4501 40.9113 27.6986C40.962 28.018 41.0182 28.3286 41.0737 28.6349C41.1656 29.1418 41.255 29.6373 41.314 30.1425L41.3162 30.1553C41.4505 30.9476 41.5208 31.7489 41.5271 32.5519L41.5277 32.5633C41.5736 33.4305 41.2714 34.2808 40.6859 34.9338L40.6766 34.9454C40.4861 35.1841 40.2314 35.3663 39.9409 35.4716C39.6505 35.5769 39.3359 35.6011 39.0322 35.5415C38.7285 35.4819 38.4478 35.3409 38.2214 35.1342C37.995 34.9275 37.8317 34.6625 37.7502 34.3704C37.5762 33.7547 37.4755 33.1214 37.4499 32.4832L37.7471 27.8569C37.7515 27.7965 37.7565 27.7345 37.7616 27.6719C37.7729 27.5314 37.7845 27.3883 37.7893 27.2548C37.7963 27.0584 37.7903 26.8564 37.7435 26.6652C37.6956 26.4698 37.6045 26.2839 37.4429 26.1256C37.2829 25.9689 37.0669 25.8533 36.7951 25.7746C36.3036 25.6355 35.888 25.6399 35.5417 25.7836C35.1952 25.9273 34.9578 26.1941 34.7898 26.5023C34.6231 26.8079 34.516 27.1697 34.435 27.5321C34.3749 27.801 34.3266 28.0833 34.2807 28.352C34.2648 28.4446 34.2493 28.5355 34.2336 28.6238L34.2332 28.6264C33.9876 30.1 33.9145 31.5962 34.0153 33.086C34.0341 33.8911 34.2058 34.6858 34.5218 35.4295C34.8783 36.3891 35.524 37.2205 36.3737 37.814C37.2252 38.4087 38.2413 38.7364 39.2875 38.7537C40.3337 38.771 41.3606 38.4771 42.2322 37.911C43.1024 37.3457 43.7768 36.5355 44.1662 35.5876C44.7109 34.3801 44.9667 33.0669 44.9139 31.7481C44.8819 30.7853 44.8283 29.8151 44.775 28.8498C44.7488 28.3763 44.7227 27.9038 44.6993 27.4342C44.6875 26.9633 44.5287 26.5072 44.2441 26.1271C44.068 25.8868 43.8336 25.693 43.5619 25.5632Z"
            fill="currentColor"
          ></path>
          <path
            class="ccustom"
            d="M53.1961 32.8173C53.1685 32.8516 53.1394 32.8871 53.109 32.924C52.8876 31.6752 52.6824 30.4268 52.4769 29.1765C52.4032 28.7279 52.3291 28.2774 52.2546 27.8282L52.2462 27.7781L52.219 27.7348C52.1677 27.6533 52.1626 27.5734 52.1626 27.403V27.3833L52.1595 27.3638C52.1039 27.0119 51.9411 26.6844 51.6924 26.4242C51.4444 26.1647 51.1223 25.9841 50.768 25.9057C50.4143 25.8204 50.0426 25.8392 49.6997 25.9598C49.3577 26.0801 49.0596 26.2963 48.8426 26.5813C48.6622 26.8 48.5143 27.0426 48.4035 27.3018C48.152 27.8602 47.8983 28.42 47.6439 28.9813L47.6395 28.991C47.0044 30.3923 46.365 31.803 45.7442 33.2248L45.7423 33.2294C45.3612 34.1513 45.0466 35.1227 44.7331 36.0911C44.6705 36.2844 44.6079 36.4776 44.5448 36.6703C44.4316 36.9759 44.3821 37.3005 44.3991 37.625C44.3785 37.9155 44.4496 38.2053 44.603 38.4552C44.7594 38.7102 44.9937 38.9108 45.2728 39.0289C45.5686 39.1557 45.8993 39.1826 46.2126 39.1054C46.5252 39.0283 46.8028 38.8519 47.0017 38.6039C47.2557 38.2984 47.4742 37.9652 47.6524 37.6122C48.1783 36.5604 48.6809 35.4958 49.1812 34.4358C49.3748 34.0258 49.5629 33.6586 49.7769 33.2587C49.7916 33.308 49.8066 33.3561 49.8221 33.4043C50.0464 34.3698 50.425 35.2946 50.9439 36.1448C51.0421 36.3249 51.1789 36.4823 51.3449 36.6062C51.5129 36.7316 51.7068 36.8196 51.9131 36.8643C52.1194 36.909 52.3332 36.9092 52.5396 36.8649C52.7457 36.8207 52.9402 36.7326 53.1083 36.6078L53.441 36.3643L56.0233 34.2376L55.8706 35.1891C55.661 36.497 55.453 37.794 55.232 39.0913C55.0874 39.6663 55.0876 40.2669 55.2326 40.8417C55.2954 41.1652 55.4554 41.463 55.6922 41.6972C55.931 41.9333 56.2368 42.0937 56.57 42.1577C56.9032 42.2216 57.2484 42.1862 57.5607 42.0559C57.8685 41.9276 58.1303 41.713 58.3133 41.4395C58.7391 40.923 59.0041 40.2977 59.0769 39.638C59.1865 38.7064 59.3103 37.7621 59.4342 36.8181C59.5769 35.73 59.7196 34.6422 59.8401 33.5753L59.8405 33.572C59.9565 32.4041 60.0126 31.2314 60.0087 30.058C60.0341 29.6872 59.9397 29.3178 59.7385 29.0021C59.5366 28.6853 59.2376 28.439 58.8842 28.2981C58.5166 28.1347 58.1051 28.091 57.7102 28.1736C57.3179 28.2556 56.9628 28.4578 56.6964 28.7507C56.2201 29.1814 55.7733 29.6423 55.3588 30.1304L55.356 30.1337C54.9035 30.685 54.4541 31.2471 54.0076 31.8056C53.7361 32.1451 53.4654 32.4838 53.1961 32.8173Z"
            fill="currentColor"
          ></path>
        </svg>
        ANIMAL SHELTER
      </h3>
      <div>
        <ul id="navbar">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="nav-icons">
        <a href="https://www.linkedin.com">
          <FaLinkedin />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
