const React = require('react');
const {Component} = React;

class ResponseCheck extends Component {
    state ={
        state:'waiting',
        message:'클릭해서 시작',
    };

    onClickScreen = () => {
        const { state } = this.state;
        if (state === 'waiting') {
          timeout.current = setTimeout(() => {
            this.setState({
              state: 'now',
              message: '지금 클릭',
            });
            this.startTime = new Date();
          }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
          this.setState({
            state: 'ready',
            message: '초록색이 되면 클릭하세요.',
          });
        } else if (state === 'ready') { // 성급하게 클릭
          clearTimeout(this.timeout);
          this.setState({
            state: 'waiting',
            message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.',
          });
        } else if (state === 'now') { // 반응속도 체크
          endTime.current = new Date();
          this.setState((prevState) => {
            return {
              state: 'waiting',
              message: '클릭해서 시작하세요.',
              result: [...prevState.result, this.endTime, this.startTime],
            };
          });
        }
      };

    renderAverage = () => {
        return this.state.result.length === 0  // result.length가 0이면 null값을 주고 아니면 아래 코드를 실행 
        ? null
        : <div>평균 시간: {this.state.result.reduce((a,c)=>a+c) / this.state.result.length }ms  </div> 
    }
    render(){
        return(
            <>
            <div
            id="scrren"
            className={this.state.state}
            onClick={this.onClickScreen}>
                {this.state.message}
            </div>
            {this.renderAverage()} 
            </>
        );
    }
    
}

module.exports = ResponseCheck;