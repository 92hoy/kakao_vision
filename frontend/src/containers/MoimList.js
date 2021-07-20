// 컴포넌트가 만들어지고 javascript 렌더링을 마치면
// this.props.fetchMoim() 액션으로 api로부터 데이터를 가져와
// state.list.moimList에 저장한다.
// 이를 전에 만든 Moim.js 컴포넌트를 map으로 돌려 리스트의 모든 모임 데이터를 뿌려준다.
import React, { Component } from "react";
import { connect } from "react-redux";
import Moim from "../components/Moim";
import { fetchMoim } from "../actions/index";

class MoimList extends Component {
  componentDidMount() {
    this.props.fetchMoim();
  }

  renderMoim() {
    return this.props.moimList.map((moim) => {
      return (
        <li key={moim.id}>
          <Moim moimData={moim} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>모임 리스트</h2>
        <ul>{this.renderMoim()}</ul>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      moimList: state.lists.moimList,
    };
  },
  { fetchMoim }
)(MoimList);
