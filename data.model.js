const mongoose = require('mongoose');

var DataSchema = mongoose.Schema({   //Data 올릴 때 쓰는 스키마(Schema) 설정
  deviceId: {type: Number, require:true},
  temperature: { type: Number, require: true},
  humidity: { type: Number, require: true},
  register_date: { type: Date, default:Date.now}
});
//mongoose는 위의 스키마 테이블에 접근 할 수 있도록 객체를 만들어주는 것이다. 각 정보 data를 올려준다.
module.exports = mongoose.model('Data', DataSchema); //소문자화 후 복수형으로 바꾸어 devices 컬렉션이 됨