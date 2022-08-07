// @ts-ignore
import styled from "styled-components";
import {curstyle} from "@/theme/curtheme";
import reuse from '@/assets/reuseable.less'

export function SetBar(prop:{children:any}) {
    //background: ${props => props.primary ? "palevioletred" : "white"};
    //color: ${props => props.primary ? "white" : "palevioletred"};
    const Button = styled.div`
      cursor: pointer;
      /* Adapt the colors based on primary prop */
      &:hover {
        background: ${curstyle().colors.gray_common}; // <Thing> when hovered
      }
      &:active{
        background: ${curstyle().colors.main_l};
        color: ${curstyle().colors.main_s};
      }
      font-size: 1em;
      margin-right: ${curstyle().gap.common};
      margin-left: ${curstyle().gap.common};
      text-align: left;
      padding: ${curstyle().gap.common};
      //margin: 1em;
      //padding: 0.25em 1em;
      border: 0px solid palevioletred;
      border-radius: ${curstyle().radius.common};
    `;
    return (
        <Button className={
            reuse.trans_color_common
        }>
            {prop.children}
        </Button>
    )
}