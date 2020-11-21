import WordCards from '../components/WordCards';
import { Button } from 'antd';
import { Row, Col, Input, Select } from 'antd';
import Styled from 'styled-components';
import { useState } from 'react';

const StyleWrapper = Styled.div`
padding: 20px 10%;
@media(max-width: 425px){
  margin: 20px 0px;
}

.select-types{
  width : 100%;
  margin: 10px;
}

.formpadding{
  margin: 10px;
}
`;
function Homepage(props) {


  const [word, setWord] = useState('');
  const [types, setTypes] = useState([]);
  const [meaning, setMeaning] = useState('');

  const typesoptions = [
    { label: 'noun', value: 'noun' },
    { label: 'verb', value: 'verb' },
    { label: 'adjective', value: 'adjective' },
    { label: 'adverb', value: 'adverb' },
    { label: 'preposition', value: 'preposition' },
    { label: 'conjungtion', value: 'conjungtion' }


  ]
  const vocabs = [{ "meanings": ["มาพร้อมกับ"], "word": "Accompany", "createdAt": "2020-11-15T11:56:52.792Z", "types": ["verb"] },
  { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" },
  { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }]

  const [datalist, setDataList] = useState(vocabs);

  const Handclick = () => {
    setDataList([...datalist, {
      word,
      types,
      meanings: meaning.split(",").map((item) => item.trim())
    }])
  }
  
  return (
    <StyleWrapper>
      <h1>Vocab</h1>
      <div>

        <div>
          <div>
            <label htmlFor='word-input' className="formpadding">Word</label>
          </div>
          <Input id='word-input' className="formpadding" placeholder="English word"
            onChange={(e) => { setWord(e.target.value) }}
            value={word} />
        </div>

        <div>
          <div>
            <label htmlFor='select-types' className="formpadding">Types</label>
          </div>
          <Select id='select-types' className="select-types" options={typesoptions} mode="multiple"
          onChange={(value) => {setTypes(value)}}  
          value={types}/>
        </div>

        <div>
          <div>
            <label htmlFor='word-meaning'>Meaning</label>
          </div>
          <Input id='word-meaning' className="formpadding" placeholder="meaning" 
          onChange={(e) => { setMeaning(e.target.value) }}
          value={meaning}/>
        </div>


      </div>
      <Button className="formpadding" onClick={Handclick}>Add vocab</Button>
      <Row>
        {datalist.map((item, index) => {
          return (
            <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
              <WordCards  {...item} />
            </Col>
          )
        })}

      </Row>
    </StyleWrapper>
  );
}

export default Homepage;
