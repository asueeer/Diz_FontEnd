import React, {Component} from 'react';
import {Box} from "@mui/joy";
import index_styles from "@/pages/index.less";
import {curstyle} from "@/theme/curtheme";
import Headline from "@/layouts/headline/headline";
import PostsPanel from "@/layouts/posts_panel/posts_panel";
import PostView from "@/layouts/post_view/post_view";
import axios from "axios";
import {baseUrl, Course} from "@/store/course_list";
import {api_get_posts} from "@/store/apis/get_posts";
import {Post as PostStruct} from "@/store/models/post";
import {PaStateMan} from "@/utills/pa_state_man";
import {RouteCtrl} from "@/store/route_ctrl";

function getQueryString(name: string) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

class Post extends Component {
    state = {
        post_id: Number(getQueryString("post_id")),
        post: {},
    }
    course_id=0
    componentDidMount() {
        const cid=RouteCtrl.get_curcouseid_in_route()
        if(cid==undefined){
            RouteCtrl.back();
            return;
        }
        this.course_id=cid

        const coursep=PaStateMan.getstate().courseProxy();
        //未加载
        if(coursep.getCurCourse().course_id!=this.course_id){
            //加载post列表
            PaStateMan.getstate().courseProxy().fetchCourceDetailAndSetCur(
                {course_id:this.course_id} as Course
            )
        }
        console.log("cid",cid)
        axios.post(baseUrl + '/get_post_detail?mock_login=123', {
            post_id: this.state.post_id
        }).then(res => {
            if (res.data.meta.code !== 0) {
                alert(res.data.meta.msg)
                return
            }
            this.setState({
                post: res.data.post_detail
            })
        })
    }



    render() {
        const content_height = "calc(100vh - 1px - " + curstyle().headlineheight + ")"
        return (
            <React.Fragment>
                <Box className={index_styles.headline}
                     sx={{
                         height: curstyle().headlineheight
                     }}
                >
                    <Headline/>
                </Box>
                <Box sx={{
                    display: "flex",
                    direction: "row"
                }}>
                    <Box sx={{
                        width: "38vw",
                        height: content_height,
                        borderWidth: "0px 1px",
                        borderStyle: "solid",
                        borderColor: curstyle().colors.gray_d
                    }}>
                        <PostsPanel>
                        </PostsPanel>
                    </Box>
                    <Box sx={{
                        width: "72vw",
                        height: content_height
                    }}>
                        <PostView post={this.state.post}>
                        </PostView>
                    </Box>
                </Box>
            </React.Fragment>
        );
    }
}

export default Post;