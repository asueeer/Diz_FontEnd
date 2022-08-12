import reuse from '@/assets/reuseable.less'
// import headline from './headline.less'
import {Box} from "@mui/joy";
import {curstyle} from "@/theme/curtheme";
import {Component, useState} from "react";
import {history} from "umi";

export default class Headline extends Component {
    rendercnt=0
    render() {
        this.rendercnt++;
        return (
            <div className={reuse.row_flex2side_container}>
                <Box
                    className={
                        reuse.col_flexcenter_container + " "
                        // +headline.logo
                    }
                    sx={{
                        height: curstyle().headlineheight,
                        width: "84px",
                        cursor: "pointer"
                    }}
                >
                    <Box
                        className={reuse.row_flex2center_container}
                        onClick={()=>{history.push("/")}}
                    >
                        <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.9715 26.392C5.56617 26.456 5.0755 26.4453 4.4995 26.36C3.9235 26.296 3.30483 26.1787 2.6435 26.008C2.30217 25.9013 2.05683 25.7733 1.9075 25.624C1.7795 25.4747 1.5555 25.1973 1.2355 24.792C1.02217 24.472 0.8835 24.1093 0.8195 23.704C0.776833 23.2987 0.830167 22.936 0.9795 22.616C1.15017 22.296 1.4275 22.104 1.8115 22.04C1.98217 21.9973 2.18483 22.04 2.4195 22.168C2.6755 22.2747 2.94217 22.4133 3.2195 22.584C3.6675 22.84 4.1475 23.096 4.6595 23.352C5.1715 23.6293 5.64083 23.736 6.0675 23.672C6.36617 23.608 6.71817 23.5653 7.1235 23.544C7.55017 23.544 7.9555 23.512 8.3395 23.448C8.74483 23.384 9.06483 23.2667 9.2995 23.096C10.4302 22.328 11.2728 21.72 11.8275 21.272C12.3822 20.8027 12.6595 20.568 12.6595 20.568C12.7022 20.4827 12.7768 20.4187 12.8835 20.376C13.0115 20.312 13.1608 20.248 13.3315 20.184C13.4595 20.056 13.6622 19.8533 13.9395 19.576C14.2168 19.2773 14.4835 18.9893 14.7395 18.712C15.0168 18.4347 15.1875 18.2747 15.2515 18.232C15.2942 18.04 15.3368 17.8907 15.3795 17.784C15.4222 17.656 15.4435 17.528 15.4435 17.4C15.6142 17.2293 15.8382 16.8773 16.1155 16.344C16.4142 15.7893 16.7128 15.1813 17.0115 14.52C17.3102 13.8373 17.5235 13.2187 17.6515 12.664C17.9288 11.4907 18.0248 10.424 17.9395 9.464C17.8542 8.504 17.6088 7.64 17.2035 6.872C16.7982 6.104 16.2542 5.432 15.5715 4.856C15.3368 4.664 15.0168 4.46133 14.6115 4.248C14.2062 4.01333 13.7902 3.8 13.3635 3.608C12.9368 3.39467 12.5528 3.23466 12.2115 3.128C11.8915 3.02133 11.6995 2.97867 11.6355 3C11.5502 3.02133 11.3795 3.352 11.1235 3.992C10.8888 4.61067 10.5902 5.41067 10.2275 6.392C9.88617 7.37333 9.51283 8.42933 9.1075 9.56C8.7235 10.6693 8.35017 11.7253 7.9875 12.728C7.88083 13.1333 7.74217 13.56 7.5715 14.008C7.42217 14.456 7.29417 14.8507 7.1875 15.192C7.08083 15.512 7.0275 15.7253 7.0275 15.832C6.79283 16.1947 6.5475 16.7493 6.2915 17.496C6.0355 18.2427 5.82217 19.3093 5.6515 20.696C5.4595 21.4213 5.32083 22.0293 5.2355 22.52C5.15017 22.9893 5.06483 23.2133 4.9795 23.192C4.9795 23.192 4.96883 23.288 4.9475 23.48C4.92617 23.6933 4.8835 23.832 4.8195 23.896C4.8195 24.024 4.6915 24.1093 4.4355 24.152C4.1795 24.1947 3.88083 24.1413 3.5395 23.992C3.19817 23.8427 2.87817 23.5547 2.5795 23.128C2.5155 22.8933 2.46217 22.552 2.4195 22.104C2.39817 21.6347 2.47283 21.0907 2.6435 20.472C2.75017 20.0667 2.8995 19.544 3.0915 18.904C3.2835 18.264 3.49683 17.6027 3.7315 16.92C3.96617 16.2373 4.1795 15.608 4.3715 15.032C4.58483 14.456 4.73417 14.0293 4.8195 13.752C4.96883 13.3893 5.18217 12.7067 5.4595 11.704C5.63017 11.1493 5.80083 10.5947 5.9715 10.04C6.1635 9.48533 6.34483 8.99467 6.5155 8.568C6.68617 8.12 6.8035 7.832 6.8675 7.704C6.97417 7.42667 7.10217 6.97867 7.2515 6.36C7.42217 5.72 7.67817 4.99467 8.0195 4.184L8.2435 3.128L7.8915 2.968C7.6355 3.05333 7.43283 3.08533 7.2835 3.064C7.1555 3.02133 7.07017 2.98933 7.0275 2.968C6.8995 3.01067 6.72883 2.97867 6.5155 2.872C6.3235 2.744 6.14217 2.584 5.9715 2.392C5.82217 2.2 5.72617 2.04 5.6835 1.912C5.64083 1.82667 5.60883 1.72 5.5875 1.592C5.5875 1.44267 5.5875 1.368 5.5875 1.368C5.60883 1.24 5.79017 1.112 6.1315 0.983999C6.47283 0.834665 6.91017 0.695999 7.4435 0.567999C7.99817 0.439999 8.58483 0.343999 9.2035 0.279999C9.82217 0.215998 10.3982 0.205332 10.9315 0.247999C11.4862 0.290665 12.1688 0.418665 12.9795 0.631998C13.7902 0.845332 14.4835 1.05867 15.0595 1.272C15.7422 1.528 16.4782 1.96533 17.2675 2.584C18.0568 3.20267 18.7715 3.93867 19.4115 4.792C20.0728 5.64533 20.5102 6.54133 20.7235 7.48C20.7875 7.736 20.8515 8.09867 20.9155 8.568C20.9795 9.03733 21.0115 9.496 21.0115 9.944C21.0328 10.3707 20.9902 10.648 20.8835 10.776C20.8408 10.8613 20.8088 10.968 20.7875 11.096C20.7875 11.2027 20.8302 11.2773 20.9155 11.32C20.8942 11.384 20.8195 11.6293 20.6915 12.056C20.5635 12.4613 20.4462 12.8133 20.3395 13.112C20.2968 13.6667 20.1475 14.3067 19.8915 15.032C19.6568 15.7573 19.3902 16.4507 19.0915 17.112C18.8142 17.752 18.5688 18.2533 18.3555 18.616C18.2702 18.616 18.1848 18.6373 18.0995 18.68C18.0355 18.7013 18.0462 18.7227 18.1315 18.744C18.1315 18.8507 18.0142 19.0533 17.7795 19.352C17.6942 19.416 17.5555 19.576 17.3635 19.832C17.1928 20.0667 17.0542 20.2267 16.9475 20.312C16.9262 20.4613 16.8622 20.5893 16.7555 20.696C16.6488 20.7813 16.5528 20.824 16.4675 20.824C16.4675 20.824 16.4462 20.824 16.4035 20.824C16.3822 20.824 16.3715 20.8667 16.3715 20.952C16.2008 21.208 15.9128 21.5387 15.5075 21.944C15.1022 22.3493 14.6435 22.7653 14.1315 23.192C13.6195 23.6187 13.1075 24.0133 12.5955 24.376C12.0835 24.7387 11.6142 25.0053 11.1875 25.176C10.9742 25.3253 10.7502 25.4427 10.5155 25.528C10.2808 25.6347 10.0568 25.7413 9.8435 25.848C9.73683 25.9333 9.4275 26.008 8.9155 26.072C8.4035 26.136 7.8595 26.1893 7.2835 26.232C6.72883 26.2747 6.2915 26.328 5.9715 26.392ZM21.7335 22.456C21.5628 22.2853 21.4348 22.0293 21.3495 21.688C21.2855 21.3467 21.2642 21.016 21.2855 20.696C21.3068 20.3547 21.3602 20.0987 21.4455 19.928C21.4455 19.7573 21.4668 19.6293 21.5095 19.544C21.5735 19.4373 21.5948 19.3413 21.5735 19.256C21.5522 19.1707 21.5735 19.0213 21.6375 18.808C21.7015 18.5947 21.7655 18.392 21.8295 18.2C21.9788 17.8587 22.1495 17.4213 22.3415 16.888C22.5335 16.3333 22.7255 15.7787 22.9175 15.224C23.1095 14.648 23.2695 14.1573 23.3975 13.752C23.5255 13.3253 23.6002 13.0693 23.6215 12.984C23.6215 12.728 23.7922 12.5893 24.1335 12.568C24.3895 12.4827 24.6988 12.5893 25.0615 12.888C25.4242 13.1867 25.7122 13.5067 25.9255 13.848C26.0962 14.0187 26.1602 14.2427 26.1175 14.52C26.0748 14.7973 25.9362 15.192 25.7015 15.704C25.6162 15.8747 25.5095 16.1627 25.3815 16.568C25.2748 16.952 25.2002 17.272 25.1575 17.528C25.0722 17.6987 24.9655 17.944 24.8375 18.264C24.7308 18.5627 24.6348 18.8507 24.5495 19.128C24.5068 19.2347 24.4642 19.4373 24.4215 19.736C24.3788 20.0133 24.3255 20.3013 24.2615 20.6C24.1975 20.8987 24.1122 21.1333 24.0055 21.304C23.8135 22.1787 23.4722 22.6907 22.9815 22.84C22.5122 22.9893 22.0962 22.8613 21.7335 22.456ZM25.1895 9.624C24.9548 9.45333 24.7735 9.25067 24.6455 9.016C24.5388 8.76 24.4748 8.536 24.4535 8.344C24.4535 8.152 24.4748 8.03467 24.5175 7.992C24.7308 7.75733 24.9122 7.448 25.0615 7.064C25.2322 6.68 25.4135 6.328 25.6055 6.008C25.6482 5.944 25.7015 5.85867 25.7655 5.752C25.8508 5.624 25.9362 5.54933 26.0215 5.528C26.2775 5.35733 26.6295 5.368 27.0775 5.56C27.5468 5.752 27.8882 6.01867 28.1015 6.36C28.2935 6.76533 28.3468 7.18133 28.2615 7.608C28.1975 8.03467 27.9735 8.48267 27.5895 8.952C27.2695 9.37867 26.8642 9.656 26.3735 9.784C25.8828 9.89067 25.4882 9.83733 25.1895 9.624ZM29.1988 22.648C28.3881 22.7547 27.7694 22.808 27.3428 22.808C26.9374 22.808 26.6281 22.7653 26.4148 22.68C26.2014 22.5947 25.9988 22.4773 25.8068 22.328C25.5934 22.1787 25.4761 21.88 25.4548 21.432C25.4334 20.9627 25.7534 20.3867 26.4148 19.704C26.8201 19.2133 27.2361 18.7547 27.6628 18.328C28.0894 17.88 28.4734 17.5173 28.8148 17.24C28.9641 17.112 29.1134 16.9947 29.2628 16.888C29.4334 16.7813 29.7108 16.6 30.0948 16.344C30.4788 16.0667 31.0868 15.6507 31.9188 15.096C32.3241 14.776 32.6121 14.552 32.7828 14.424C32.9534 14.296 33.0921 14.2 33.1988 14.136C33.3054 14.0507 33.4441 13.944 33.6148 13.816C33.4654 13.7947 33.1774 13.7627 32.7508 13.72C32.3454 13.656 31.9294 13.6453 31.5028 13.688C30.9054 13.688 30.5641 13.688 30.4788 13.688C30.3934 13.6667 30.2654 13.6347 30.0948 13.592H29.6148C29.5081 13.592 29.3161 13.5173 29.0388 13.368C28.7828 13.2187 28.5374 13.048 28.3028 12.856C28.0894 12.6427 27.9721 12.4613 27.9508 12.312C27.9508 12.312 28.0148 12.2373 28.1428 12.088C28.2708 11.9387 28.3774 11.8213 28.4628 11.736C28.6334 11.6293 28.7614 11.544 28.8468 11.48C28.9534 11.416 29.0494 11.4267 29.1348 11.512C29.1348 11.512 29.4014 11.5013 29.9348 11.48C30.4681 11.4373 30.9908 11.4053 31.5028 11.384C32.7401 11.4053 33.6468 11.448 34.2228 11.512C34.8201 11.5547 35.2574 11.64 35.5348 11.768C35.8334 11.896 36.1214 12.088 36.3988 12.344C36.7401 12.6853 36.9641 13.0693 37.0708 13.496C37.1774 13.9227 37.1134 14.264 36.8788 14.52C36.7934 14.6053 36.7081 14.7013 36.6228 14.808C36.5588 14.8933 36.4948 14.936 36.4308 14.936C36.4308 14.936 36.2814 15.032 35.9828 15.224C35.6841 15.416 35.3214 15.6507 34.8948 15.928C34.4894 16.2053 34.0841 16.4613 33.6788 16.696C33.2948 16.9307 33.0601 17.1013 32.9748 17.208C32.8254 17.2933 32.6441 17.4107 32.4308 17.56C32.2174 17.688 32.0681 17.7947 31.9828 17.88C31.9188 17.9653 31.7694 18.1147 31.5348 18.328C31.3214 18.5413 31.0868 18.7333 30.8308 18.904C30.6388 19.0747 30.4254 19.2667 30.1908 19.48C29.9774 19.6933 29.7854 19.8853 29.6148 20.056C29.4654 20.2053 29.3908 20.28 29.3908 20.28C29.3908 20.28 29.5508 20.2587 29.8708 20.216C30.1908 20.152 30.6174 20.0987 31.1508 20.056C31.6841 19.992 32.2601 19.9813 32.8788 20.024C33.8814 20.0027 34.6708 19.9813 35.2468 19.96C35.8441 19.9173 36.2921 19.9067 36.5908 19.928C36.9108 19.928 37.1561 19.9707 37.3268 20.056C37.4761 20.0987 37.5828 20.248 37.6468 20.504C37.7321 20.76 37.7854 21.016 37.8068 21.272C37.8281 21.528 37.8174 21.688 37.7748 21.752C37.6894 21.752 37.3588 21.784 36.7828 21.848C36.2068 21.8907 35.5454 21.9333 34.7988 21.976C33.8174 22.0613 32.8681 22.168 31.9508 22.296C31.0334 22.424 30.1161 22.5413 29.1988 22.648Z"
                                fill={curstyle().colors.main_s}
                            />
                        </svg>
                    </Box>
                </Box>
                <div>user</div>
            </div>
        );
    }

}