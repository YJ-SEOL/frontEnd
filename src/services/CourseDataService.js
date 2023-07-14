import http from "../http-common";

class CourseDataService {
	getAll(pageNo, numOfRows) {
		return http.get(
			`https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/6260000/fbusangmgcourseinfo/getgmgcourseinfo?serviceKey=
			HX3YdSG2Sj5y0ppK0QokmAkOGowAP1XnBgrwtN3WZHsLmbUy0QUXhBJ1VFYKP7d7bHFap5OsLvfr7Qmqc37Kww==&pageNo=${pageNo}&numOfRows=${numOfRows}&resultType=json`
			// `http://apis.data.go.kr/6260000/fbusangmgcourseinfo/getgmgcourseinfo?serviceKey=
			// HX3YdSG2Sj5y0ppK0QokmAkOGowAP1XnBgrwtN3WZHsLmbUy0QUXhBJ1VFYKP7d7bHFap5OsLvfr7Qmqc37Kww%3D%3D&pageNo=${pageNo}&numOfRows=${numOfRows}&resultType=json`
		);
	}
}

export default new CourseDataService();
