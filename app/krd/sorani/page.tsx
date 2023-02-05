import React from "react";
import { InLang } from "@/components";

const p1 =
  "لە سۆنگەی بڕوابوون بە سیستەمی هاندانی ئابووری و میكانیزمی بازاڕ لە بەدیهێنانی باشترین سەرچاوە ئابوورییەكان (ماددی و مرۆیی) لە وڵاتدا، لە سنووری توانا تەكنیكی و زانستییە بەردەستەكان، دەرگای ڕۆژهەڵات بۆ توێژینەوە ئابوورییەكان و توێژینەوەی بازاڕ هەوڵ بۆ بەهێزكردنی هاوكاریی بونیاتنانی نێوان كەرتی تایبەت وەكوو كۆمپانیا وەبەرهێنییە ناوخۆیی و بیانییەكان و كەرتی گشتی وەكوو دامەزراوە حكومییە جیاوازەكان دەدات؛ لە سایەی پشتیوانیكردنی ڕێكخراوە ناحكومییە خۆجێیی و نێودەوڵەتییەكات. ";
const p2 =
  "وە لە پێناو وەرچەرخان بەڕووی ئابووریی بازاڕ و دووبارە شیاندنەوەی كەرتی تایبەت بۆ سەركردایەتیكردنی هەستانەوەی ئابووری و وەبەرهێنانی سەرچاوەكانی وڵات، بۆ گەیشتن بە بەرزترین ئاستی توانا و بەرهەمهێنان كە ڕەنگدانەوەی لەسەر ئاستی بژێوی و خۆشگوزەرانی و پاڵپێوەنانی ڕەوڕەوەی گەشەی ئابووری بەرەو پێشكەوتنی بەردەوام هەبێت.";
const p3 =
  "بۆ ئەوەی دەرگای ڕۆژهەڵات بە بەرپرسیارەتیی خۆی هەستێت و باشترین خزمەتگوزاریی تویژینەوەیی و زانستی پێشكەش بكات كە هەلەكانی گەشەپێدان و وەبەرهێنان بەرز بكاتەوە، ئەو پرسیارنامەیەی خوارەوە ئاراستەی وەبەرهێنەران و بەڕێوەبەرانی كۆمپانیاكان و بەرپرسانی حكومی و كارمەندانی ڕێكخراوە ناحكومییەكان و ڕێكخراوە نێودەوڵەتییەكانی ناو عێراق و ناوەندەكانی توێژینەوە و لێكۆڵینەوەی ئابووری و نائابووری و ئەوانە دەكات كە خوازیاری هاوكارین بۆ وەڵامدانەوەی درووستی ئەم  پرسیارانە:";
const Sorani = () => {
  return (
    <main>
      <div className="flex justify-center">
        <InLang />
      </div>

      <div dir="rtl" className="font-SFAr">
        <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
          <div className="text-3xl">
            پێویستییەكانی توێژینەوە لە دامەزراوە ئابوورییەكان لە عێراقدا
          </div>
          <div className="lg:text-lg sm:text-base font-light">{p1}</div>
          <div className="lg:text-lg sm:text-base font-light">{p2}</div>
          <div className="lg:text-lg sm:text-base font-light">{p3}</div>
        </div>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfKZe0Wvw6W-3AZClvSkePaqSERUFchUJBRLSso5IS0GctHpg/formResponse"
          method="POST"
        >
          <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <label htmlFor="">
              <div className="text-2xl">پۆستی ئەلیكترۆنی (ئیمەیل)*</div>
              <input
                required
                type="email"
                name="entry.1740200965"
                placeholder="ئیمەیل..."
                className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
              />
            </label>
          </div>

          <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <div className="text-2xl">جۆری دامەزراوە:</div>

            <div className="flex items-center mb-4">
              <input
                required
                id="1"
                type="radio"
                value="مؤسسة خاصة"
                name="entry.1119778135"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="1"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;دامەزراوەی تایبەت
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="2"
                type="radio"
                value="مؤسسة حكومية"
                name="entry.1119778135"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="2"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;دامەزراوەی حكومی
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="3"
                type="radio"
                value="منظمة غير حكومية"
                name="entry.1119778135"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="3"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;ڕێكخراوی ناحكومی
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="4"
                type="radio"
                value="مركز بحثي"
                name="entry.1119778135"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="4"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;ناوەندی توێژینەوە
              </label>
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor="323343434"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300 flex items-center gap-5"
              >
                هی&nbsp;تر:
                <input
                  id="323343434"
                  type="text"
                  name="entry.619012737"
                  placeholder="لێرە بنووسە..."
                  className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
                />
              </label>
            </div>
          </div>

          <div className="bg-light dark:bg-dark flex flex-col gap-8 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <label htmlFor="4454">
              {" "}
              <div className="text-2xl">بواری كاری دامەزراوە</div>
              <input
                id="4454"
                required
                type="text"
                name="entry.1739662440"
                placeholder="وەڵامەکەت..."
                className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
              />
            </label>
          </div>

          <div className="bg-light dark:bg-dark flex flex-col gap-8 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <label htmlFor="">
              {" "}
              <div className="text-2xl">وڵاتی دامەزراوە:</div>
              <select
                required
                name="entry.306491599"
                className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
              >
                <option value="" className="text-dark/50 dark:text-light/50">
                  وڵاتێک هەڵبژێرە...
                </option>
                <option value="أفغانستان">Afghanistan</option>
                <option value="ألبانيا">Albania</option>
                <option value="الجزائر">Algeria</option>
                <option value="ساموا الأمريكية">American Samoa</option>
                <option value="أندورا">Andorra</option>
                <option value="أنغولا">Angola</option>
                <option value="أنغويلا">Anguilla</option>
                <option value="أنتيغوا وبربودا">Antigua and Barbuda</option>
                <option value="الأرجنتين">Argentina</option>
                <option value="أرمينيا">Armenia</option>
                <option value="أروبا">Aruba</option>
                <option value="أستراليا">Australia</option>
                <option value="النمسا">Austria</option>
                <option value="أذربيجان">Azerbaijan</option>
                <option value="جزر البهاما">Bahamas</option>
                <option value="البحرين">Bahrain</option>
                <option value="بنغلاديش">Bangladesh</option>
                <option value="بربادوس">Barbados</option>
                <option value="بيلاروسيا">Belarus</option>
                <option value="بلجيكا">Belgium</option>
                <option value="بيلز">Belize</option>
                <option value="بنن">Benin</option>
                <option value="برمودا">Bermuda</option>
                <option value="بوتان">Bhutan</option>
                <option value="بوليفيا">Bolivia</option>
                <option value="البوسنة والهرسك">Bosnia and Herzegovina</option>
                <option value="بوتسوانا">Botswana</option>
                <option value="البرازيل">Brazil</option>
                <option value="بروناي دار السلام">Brunei Darussalam</option>
                <option value="بلغاريا">Bulgaria</option>
                <option value="بوركينا فاسو">Burkina Faso</option>
                <option value="بوروندي">Burundi</option>
                <option value="كمبوديا">Cambodia</option>
                <option value="الكاميرون">Cameroon</option>
                <option value="كندا">Canada</option>
                <option value="جزر كايمان">Cayman Islands</option>
                <option value="جمهورية أفريقيا الوسطى">
                  Central African Republic
                </option>
                <option value="تشاد">Chad</option>
                <option value="شيلي">Chile</option>
                <option value="الصين">China</option>
                <option value="كولومبيا">Colombia</option>
                <option value="الكونغو ، ديموقراطية">Congo</option>
                <option value="الكونغو، جمهورية">
                  Congo, Democratic Republic of the Congo
                </option>
                <option value="جزر كوك">Cook Islands</option>
                <option value="كوستاريكا">Costa Rica</option>
                <option value="كوت ديفوار">Cote D'Ivoire</option>
                <option value="كرواتيا">Croatia</option>
                <option value="كوبا">Cuba</option>
                <option value="قبرص">Cyprus</option>
                <option value="جمهورية التشيك">Czech Republic</option>
                <option value="الدانمارك">Denmark</option>
                <option value="جيبوتي">Djibouti</option>
                <option value="دومينيكا">Dominica</option>
                <option value="جمهورية الدومينيكان">Dominican Republic</option>
                <option value="الإكوادور">Ecuador</option>
                <option value="مصر، الجمهورية العربية">Egypt</option>
                <option value="السلفادور">El Salvador</option>
                <option value="غينيا الاستوائية">Equatorial Guinea</option>
                <option value="إريتريا">Eritrea</option>
                <option value="إستونيا">Estonia</option>
                <option value="إثيوبيا">Ethiopia</option>
                <option value="فيجي">Fiji</option>
                <option value="فنلندا">Finland</option>
                <option value="فرنسا">France</option>
                <option value="PF">French Polynesia</option>
                <option value="غيانا الفرنسية">
                  French Southern Territories
                </option>
                <option value="غابون">Gabon</option>
                <option value="غامبيا">Gambia</option>
                <option value="جورجيا">Georgia</option>
                <option value="ألمانيا">Germany</option>
                <option value="غانا">Ghana</option>
                <option value="اليونان">Greece</option>
                <option value="غرينلاند">Greenland</option>
                <option value="غرينادا">Grenada</option>
                <option value="غوام">Guam</option>
                <option value="جواتيمالا">Guatemala</option>
                <option value="غينيا">Guinea</option>
                <option value="غينيا بيساو">Guinea-Bissau</option>
                <option value="غيانا">Guyana</option>
                <option value="هايتي">Haiti</option>
                <option value="هندوراس">Honduras</option>
                <option value="منطقة هونغ كونغ الإدارية الخاصة، الصين">
                  Hong Kong
                </option>
                <option value="أيسلندا">Iceland</option>
                <option value="الهند">India</option>
                <option value="إندونيسيا">Indonesia</option>
                <option value="إيران, الجمهورية الإسلامية">
                  Iran, Islamic Republic of
                </option>
                <option value="العراق">Iraq</option>
                <option value="أيرلندا">Ireland</option>
                <option value="اسرائيل">Israel</option>
                <option value="ايطاليا">Italy</option>
                <option value="جامايكا">Jamaica</option>
                <option value="اليابان">Japan</option>
                <option value="جيرسي, جزر القنال">Jersey</option>
                <option value="الأردن">Jordan</option>
                <option value="كازاخستان">Kazakhstan</option>
                <option value="كينيا">Kenya</option>
                <option value="كوريا ، ديموقراطي">
                  Korea, Democratic People's Republic of
                </option>
                <option value="جمهورية كوريا">Republic of Korea</option>
                <option value="كوسوفو">Kosovo</option>
                <option value="الكويت">Kuwait</option>
                <option value="جمهورية قيرغيزستان">Kyrgyzstan</option>
                <option value="جمهورية لاو الديمقراطية الشعبية">
                  Lao People's Democratic Republic
                </option>
                <option value="لاتفيا">Latvia</option>
                <option value="لبنان">Lebanon</option>
                <option value="ليسوتو">Lesotho</option>
                <option value="ليبيريا">Liberia</option>
                <option value="ليبيا">Libya</option>
                <option value="ليشتنشتاين">Liechtenstein</option>
                <option value="لتوانيا">Lithuania</option>
                <option value="لوكسمبورج">Luxembourg</option>
                <option value="مدغشقر">Madagascar</option>
                <option value="ملاوي">Malawi</option>
                <option value="ماليزيا">Malaysia</option>
                <option value="ملديف">Maldives</option>
                <option value="مالي">Mali</option>
                <option value="مالطا">Malta</option>
                <option value="جزر مارشال">Marshall Islands</option>
                <option value="مارتينيك">Martinique</option>
                <option value="موريتانيا">Mauritania</option>
                <option value="المكسيك">Mexico</option>
                <option value="مولدافيا">Republic of Moldova</option>
                <option value="موناكو">Monaco</option>
                <option value="منغوليا">Mongolia</option>
                <option value="المغرب">Morocco</option>
                <option value="موزمبيق">Mozambique</option>
                <option value="ميانمار">Myanmar</option>
                <option value="ناميبيا">Namibia</option>
                <option value="ناورو">Nauru</option>
                <option value="نيبال">Nepal</option>
                <option value="هولندا">Netherlands</option>
                <option value="نيوزيلندا">New Zealand</option>
                <option value="نيكاراجوا">Nicaragua</option>
                <option value="النيجر">Niger</option>
                <option value="نيجيريا">Nigeria</option>
                <option value="نيوي">Niue</option>
                <option value="النرويج">Norway</option>
                <option value="عُمان">Oman</option>
                <option value="باكستان">Pakistan</option>
                <option value="بالاو">Palau</option>
                <option value="بنما">Panama</option>
                <option value="بابوا غينيا الجديدة">Papua New Guinea</option>
                <option value="باراجواي">Paraguay</option>
                <option value="بيرو">Peru</option>
                <option value="الفلبين">Philippines</option>
                <option value="بولندا">Poland</option>
                <option value="البرتغال">Portugal</option>
                <option value="بويرتوريكو">Puerto Rico</option>
                <option value="قطر">Qatar</option>
                <option value="رومانيا">Romania</option>
                <option value="الاتحاد الروسي">Russian Federation</option>
                <option value="رواندا">Rwanda</option>
                <option value="ساموا">Samoa</option>
                <option value="سان مارينو">San Marino</option>
                <option value="سان تومي وبرينسيبي">
                  Sao Tome and Principe
                </option>
                <option value="المملكة العربية السعودية">Saudi Arabia</option>
                <option value="السنغال">Senegal</option>
                <option value="صربيا">Serbia</option>
                <option value="سيشيل">Seychelles</option>
                <option value="سيراليون">Sierra Leone</option>
                <option value="سنغافورة">Singapore</option>
                <option value="سلوفاكيا">Slovakia</option>
                <option value="سلوفينيا">Slovenia</option>
                <option value="جزر سليمان">Solomon Islands</option>
                <option value="الصومال">Somalia</option>
                <option value="جنوب أفريقيا">South Africa</option>
                <option value="جنوب السودان">South Sudan</option>
                <option value="إسبانيا">Spain</option>
                <option value="سريلانكا">Sri Lanka</option>
                <option value="السودان">Sudan</option>
                <option value="سورينام">Swaziland</option>
                <option value="السويد">Sweden</option>
                <option value="سويسرا">Switzerland</option>
                <option value="الجمهورية العربية السورية">
                  Syrian Arab Republic
                </option>
                <option value="تايوان، الصين">Taiwan, Province of China</option>
                <option value="طاجيكستان">Tajikistan</option>
                <option value="تنزانيا">United Republic of Tanzania</option>
                <option value="تايلاند">Thailand</option>
                <option value="تيمور الشرقية">Timor-Leste</option>
                <option value="توغوG">Togo</option>
                <option value="تونغا">Tonga</option>
                <option value="ترنداد وتوباجو">Trinidad and Tobago</option>
                <option value="تونس">Tunisia</option>
                <option value="تركيا">Turkey</option>
                <option value="تركمانستان">Turkmenistan</option>
                <option value="توفالو">Tuvalu</option>
                <option value="أوغندا">Uganda</option>
                <option value="أوكرانيا">Ukraine</option>
                <option value="الإمارات العربية المتحدة">
                  United Arab Emirates
                </option>
                <option value="المملكة المتحدة">United Kingdom</option>
                <option value="الولايات المتحدة الأمريكية">
                  United States
                </option>
                <option value="اوروجواي">Uruguay</option>
                <option value="أوزبكستان">Uzbekistan</option>
                <option value="فانواتو">Vanuatu</option>
                <option value="فنزويلا">Venezuela</option>
                <option value="فيتنام">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="جزر فيرجن (الولايات المتحدة)">
                  Virgin Islands, U.s.
                </option>
                <option value="اليمن, جمهورية">Yemen</option>
                <option value="زامبيا">Zambia</option>
                <option value="زيمبابوي">Zimbabwe</option>
              </select>
            </label>
          </div>

          <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <div className="text-2xl">
              وەبەرهێنان لە عێراق بۆ ئێوە چی دەگەیەنێت؟
            </div>

            <div className="flex items-center mb-4">
              <input
                required
                id="11"
                type="radio"
                value="نشاط أقوم به حاليا"
                name="entry.1234420270"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="11"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;ئێستا بەو چالاكییە هەڵدەستین
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="22"
                type="radio"
                value="نشاط أخطط للقيام به"
                name="entry.1234420270"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="22"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;پلان بۆ جێبەجێكردنی چالاكییەكە دادەنێین
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="33"
                type="radio"
                value="هدف أعمل على دعمه وتشجيعه حاليا"
                name="entry.1234420270"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="33"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;ئامانج كاركردنە بۆ پشتیوانیكردن و هاندانی وەبەرهێنان لە
                ئێستادا
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="44"
                type="radio"
                value="هدف أخطط لتشجيعه ودعمه"
                name="entry.1234420270"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="44"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;ئامانج پلاندانانە بۆ هاندان و پشتیوانیكردنی
              </label>
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor="222224"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300 flex items-center gap-5"
              >
                {" "}
                هی&nbsp;تر
                <input
                  id="222224"
                  type="text"
                  name="entry.707139989"
                  placeholder="لێرە بنووسە..."
                  className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
                />
              </label>
            </div>
          </div>

          <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <div className="text-2xl">
              چ شتێك هەیە كە هاوكاریت دەكات بۆ پێشخستنی چالاكی و جێبەجێكردنی
              پلانەكەت؟
            </div>

            <div className="flex items-center mb-4">
              <input
                required
                id="111"
                type="radio"
                value="القوانين والتشريعات الاقتصادية: قوانين الاستثمار- حقوق التملك- الضرائب وغيرها."
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="111"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                یاساكان و پڕۆسەی یاسادانانی ئابووری: یاساكانی
                &nbsp;وەبەرهێنان-مافەكانی خاوەندارییەتی-باج و شتەكانی دیكە.
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="222"
                type="radio"
                value="السياسات التجارية والمالية: الرسوم الكمركية- الإعفاءات الضريبية- دعم المستثمرين والمشاريع الاستثمارية"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="222"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                سیاسەتە بازرگانی و داراییەكان: ڕەسمە گومرگییەكان-بەخشینەكانی
                &nbsp;باج-پشتیوانیكردنی وەبەرهێنەران و پڕۆسە وەبەرهێنییەكان.
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="333"
                type="radio"
                value="الإجراءات الإدارية: سهولتها وتكاليفها"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="333"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;ڕێوشوێنە كارگێرییەكان: ئاسانكاری و تێچوونەكانی.
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="444"
                type="radio"
                value="الأجور: هيكل الأجور حسب القطاعات وحسب الخبرة والتحصيل الدراسي"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="444"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                كرێیەكان: پەیكەری كرێیەكان بەپێی كەرتەكان و بەپێی پسپۆڕی و
                &nbsp;بڕوانامەی خوێندن
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="555"
                type="radio"
                value="المنتجات والخدمات: أسعارها وحجم الطلب عليها ومصادر توفيرها"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="555"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                بەرهەمەكان و خزمەتگوزارییەكان: نرخەكان و قەبارەی خواست لەسەریان
                &nbsp;و سەرچاوەكانی بەردەستخستنیان
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="666"
                type="radio"
                value="المدخلات: الموردون لها وأسعارها"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="666"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;هاوردەكان: سەرچاوەكانیان و نرخەكانیان
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="777"
                type="radio"
                value="خدمات الكهرباء والاتصالات والنقل: مدى توفرها وأسعارها"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="777"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                خزمەتگوزاریی كارەبا و پەیوەندییەكان و گواستنەوە: مەودای
                &nbsp;بەردەستبوون و نرخەكانیان
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="888"
                type="radio"
                value="البنى التحتية طرق- مخازن-موانئ- مطارات: مدى توفرها وتكاليف استخدامها"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="888"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                ژێرخانی ڕێگەكان-كۆگاكان-دەروازەكان-فڕۆكەخانەكان: توانای
                &nbsp;بەردەستبوونیان و تێچوون و بەكارهێنانیان
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="999"
                type="radio"
                value="مدى توفر الخدمات المالية والمصرفية"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="999"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;توانای بەردەستبوونی دارایی و بانكی
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="101010"
                type="radio"
                value="مدى توفر العمالة الماهرة والمحترفة"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="101010"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;توانای بەردەستبوونی توانای مرۆیی لێهاتوو و پیشەیی
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="111111"
                type="radio"
                value="المنافسون: عددهم وإمكاناتهم الاقتصادية"
                name="entry.1180658350"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="111111"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;كێبەركێكاران: ژمارەیان و توانا ئابوورییەكانیان
              </label>
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor="2323"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300 flex items-center gap-5"
              >
                هی&nbsp;تر:
                <input
                  id="2323"
                  type="text"
                  name="entry.1336555034"
                  placeholder="لێرە بنووسە..."
                  className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
                />
              </label>
            </div>
          </div>

          <div className="bg-light dark:bg-dark flex flex-col gap-4 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <div className="text-2xl">پێویستییەكانت بۆ توێژینەوە چین؟</div>

            <div className="flex items-center mb-4">
              <input
                required
                id="1111"
                type="radio"
                value="تحديد الفرص الاستثمارية"
                name="entry.795808512"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="1111"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;دیاریكردنی هەلەكانی وەبەرهێنان{" "}
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="2222"
                type="radio"
                value="معرفة مدى ملائمة بيئة معينة للأنشطة الاستثمارية"
                name="entry.795808512"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="2222"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;زانینی جەدوای پڕۆژە دیاریكراوەكان{" "}
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="3333"
                type="radio"
                value="معرفة مدى ملائمة بيئة معينة للأنشطة الاستثمارية"
                name="entry.795808512"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="3333"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;زانینی توانای گونجاوی ژینگەی دیاریكراو بۆ چالاكیی
                وەبەرهێنان
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="4444"
                type="radio"
                value="معرفة اتجاهات الطلب في السوق"
                name="entry.795808512"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="4444"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;زانینی ئاراستەكانی خواست لە بازاڕدا{" "}
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="5555"
                type="radio"
                value="معرفة المنافسين"
                name="entry.795808512"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="5555"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;ناسینی كێبەركێكارەكان{" "}
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="6666"
                type="radio"
                value="معرفة مستويات المعيشة"
                name="entry.795808512"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="6666"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;زانینی ئاستەكانی بژێوی{" "}
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="7777"
                type="radio"
                value="معرفة هيكل قوة العمل"
                name="entry.795808512"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="7777"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                &nbsp;زانینی پەیكەری هێزی كار{" "}
              </label>
            </div>

            <div className="flex items-center mb-4">
              <label
                htmlFor="6565"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300 flex items-center gap-5"
              >
                هی&nbsp;تر:
                <input
                  id="6565"
                  type="text"
                  name="entry.648950733"
                  placeholder="لێرە بنووسە..."
                  className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
                />
              </label>
            </div>
          </div>

          <div className="bg-light dark:bg-dark flex flex-col gap-8 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <label htmlFor="3232">
              <div className="text-2xl">
                زانیاریی زیاتر لەسەر دامەزراوە (ئارەزوومەندانە)
              </div>
              <input
                id="3232"
                type="text"
                name="entry.855057249"
                placeholder="وەڵمەکەت..."
                className="bg-lighter dark:bg-darker p-3 rounded-xl w-full"
              />
            </label>
          </div>

          <div className="bg-light hover:bg-[#27285C] dark:bg-dark dark:hover:bg-[#27285C] cursor-pointer flex flex-col gap-8 p-5 rounded-xl lg:w-[800px] md:w-[400px] sm:w-[250px] my-5 mx-2">
            <input
              type="submit"
              value="ناردن"
              className="text-3xl cursor-pointer font-bold"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Sorani;
