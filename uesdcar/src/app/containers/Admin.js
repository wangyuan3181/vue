import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import {push} from "react-router-redux";
import {connect} from "dva";

import App from "./App.js";

class Buy extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<App k="admin">
				<Layout>
					<Sider width={200} style={{ background: '#fff' }}>
						<Menu
							mode="inline"
							defaultSelectedKeys={[this.props.k]}
							style={{ height: '100%', borderRight: 0 }}
							onClick={(item)=>{
								this.props.dispatch(push("/admin/" + item.key))
							}}
						>
							<Menu.Item key="profile">员工信息修改</Menu.Item>
							<Menu.Item key="fire">解雇员工</Menu.Item>
						</Menu>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>首页</Breadcrumb.Item>
							<Breadcrumb.Item>员工</Breadcrumb.Item>
							<Breadcrumb.Item>
								{this.props.c}
							</Breadcrumb.Item>
						</Breadcrumb>
						<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
							{this.props.children}
						</Content>
					</Layout>
				</Layout>
			</App>
		);
	}
}


export default connect()(Buy);