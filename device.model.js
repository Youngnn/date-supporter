const mongoose = require('mongoose');

var DeviceSchema = mongoose.Schema({   //스키마(Schema) 설정 <장치가 있는 정보들>
  deviceId: {type: Number, require:true}, //ID
  name: { type: String, require: true}, //사용자
  spot: { type: String, require: true}, //여행지
  link: { type: String, require: true}, //링크
  latitude: { type: Number, require: true}, //위도
  longitude: { type: Number, require: true}, //경도
  description: { type: String, require: true}, //설명
  register_date: { type: Date, default:Date.now} //등록 시간
});
 //스키마를 만들어 저장하는 것
module.exports = mongoose.model('Device', DeviceSchema); //소문자화 후 복수형으로 바꾸어 devices 컬렉션이 됨
