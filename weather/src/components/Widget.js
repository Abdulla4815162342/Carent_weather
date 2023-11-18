import React from "react";
import TableWidget from "./Table";
import Clock from "./Clock";
import { connect } from "react-redux";
import { setWidgetData } from "../redux/actions/widget";
import { Switch } from "antd";
import styles from "./Widget.module.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { unit: "metric" };
  }
  componentDidMount() {
    this.props.setWidgetData(
      this.state.unit,
      524901,
      "d04912cef389db95d18b7df8073b26df"
    );
  }

  render() {
    const temp = Math.ceil(this.props?.widgetDataApi?.main?.temp);
    const img =
      this.props?.widgetDataApi.weather &&
      this.props?.widgetDataApi.weather[0].icon;
    const t = (a) => {
      if (a === true) {
        this.setState({ unit: "metric" });
      } else {
        this.setState({ unit: "imperial" });
      }
      const unit = a ? "metric" : "imperial";
      this.props.setWidgetData(
        unit,
        524901,
        "d04912cef389db95d18b7df8073b26df"
      );
    };

    return (
      <div className={styles.centr}>
        <div>
          <h3 className={styles.header}>
            Current weather and forecasts in your city
          </h3>
          <h2 className={styles.moscow}>
            Weather in {this.props.cityName}, RU
          </h2>
        </div>
        <div className={styles.tempObject}>
          <h2 className={styles.gradus}> {temp} </h2>
          <div>
            <a href="" className={styles.c}>
              &deg;F
            </a>
          </div>
          <div>
            <Switch
              checkedChildren="C"
              unCheckedChildren="F"
              defaultChecked
              onChange={t}
              className={styles.checked}
            />
          </div>
          <div className={styles.centr2}>
            <img
              src={`https://openweathermap.org/img/wn/${img}@2x.png `}
              alt="img weather"
            />
          </div>
        </div>

        <Clock />

        <TableWidget
          widgetDataApi={this.props.widgetDataApi}
          valuesShow={this.props.showFlagValues}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cityName: state.widgetData.cityName,
    showFlagValues: state.widgetData.dataWeatherWidget.showValues,
    widgetDataApi: state.widgetDataApi,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setWidgetData: (unitNew, idCity, appId) =>
      setWidgetData(unitNew, idCity, appId, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
