<<<<<<< HEAD
<body><article id="d7d58b84-a358-4511-a7e3-15892a02aa6c" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">🕹️</span></div><h1 class="page-title">API Docs</h1></header><div class="page-body"><p id="ad462aaa-40c4-428f-89b3-324b21d134cf" class="">
</p><p id="2b04a8b1-ed14-4eb1-88f5-be179c3c5a5b" class="">baseURL: http://xx.xx.xxx.xx:3003/manitto/v1(보안을 위해 가렸습니다)</p><ul id="371a2da0-058b-40e5-8392-168f5a5b7cc3" class="toggle"><li><details open=""><summary>api</summary><ul id="c4964b2d-78eb-4879-83cb-dacd10547030" class="toggle"><li><details open=""><summary>공통사항</summary><ul id="f28fae45-5463-4ab6-b788-4db2a6c2f825" class="bulleted-list"><li>반환값:<p id="14308e61-36c4-4aa1-8c77-a0af11309f51" class="">모든 요청은 JSON형식의 데이터를 반환합니다. </p></li></ul><ul id="ddab44b9-5b6f-4004-9ad0-f708052a3527" class="bulleted-list"><li>방 자동 입장:<p id="ca66aa80-123f-4edb-a387-269388570f2a" class="">방을 생성한 유저는 자동으로 그 방에 입장합니다.</p></li></ul><p id="4edacbee-a5dd-49c1-afc4-e5db2e59b3e0" class="">(검토하면서 공통으로 참고할만한 사항 추가 예정)</p></details></li></ul><ul id="6973cf24-0e5b-40d3-930c-fb327cd8ff65" class="toggle"><li><details open=""><summary>유저</summary><ul id="b3694e1a-6809-4ebd-86f9-ec4dc50787ad" class="toggle"><li><details open=""><summary>유저 생성</summary><pre id="beb9422b-aa0d-41da-91f1-02bf7a097917" class="code"><code>[POST] <mark class="highlight-blue">/users </mark><strong>유저 생성</strong></code></pre><p id="69d2dcb2-59af-4e68-9860-aadd58fa2f81" class="">
=======
<body><article id="d7d58b84-a358-4511-a7e3-15892a02aa6c" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">🕹️</span></div><h1 class="page-title">마니또 프로젝트 서버 API Docs</h1></header><div class="page-body"><p id="ad462aaa-40c4-428f-89b3-324b21d134cf" class="">
</p><p id="2b04a8b1-ed14-4eb1-88f5-be179c3c5a5b" class="">baseURL: http://xx.xx.xxx.xx:3003/manitto/v1</p><ul id="371a2da0-058b-40e5-8392-168f5a5b7cc3" class="toggle"><li><details open=""><summary>api</summary><ul id="c4964b2d-78eb-4879-83cb-dacd10547030" class="toggle"><li><details open=""><summary>공통사항</summary><ul id="f28fae45-5463-4ab6-b788-4db2a6c2f825" class="bulleted-list"><li>반환값:<p id="14308e61-36c4-4aa1-8c77-a0af11309f51" class="">모든 요청은 JSON형식의 데이터를 반환합니다. </p></li></ul><ul id="ddab44b9-5b6f-4004-9ad0-f708052a3527" class="bulleted-list"><li>방 자동 입장:<p id="ca66aa80-123f-4edb-a387-269388570f2a" class="">방을 생성한 유저는 자동으로 그 방에 입장합니다.</p></li></ul><p id="4edacbee-a5dd-49c1-afc4-e5db2e59b3e0" class="">(검토하면서 공통으로 참고할만한 사항 추가 예정)</p></details></li></ul><ul id="6973cf24-0e5b-40d3-930c-fb327cd8ff65" class="toggle"><li><details open=""><summary>유저</summary><ul id="b3694e1a-6809-4ebd-86f9-ec4dc50787ad" class="toggle"><li><details open=""><summary>유저 생성</summary><pre id="beb9422b-aa0d-41da-91f1-02bf7a097917" class="code"><code>[POST] <mark class="highlight-blue">/users </mark><strong>유저 생성</strong></code></pre><p id="69d2dcb2-59af-4e68-9860-aadd58fa2f81" class="">
>>>>>>> 1f4ab505ac8acb63067bdcbd14dd116bd38c6068
</p><div id="6c10f6c7-754c-41c8-b661-19b8ed6aeaac" class="collection-content"><h4 class="collection-title">Body</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Type</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Required</th></tr></thead><tbody><tr id="0da7e246-6825-47cb-b0d8-0e3730f553d6"><td class="cell-title"><a href="https://www.notion.so/username-0da7e246682547cbb0d80e3730f553d6">username</a></td><td class="cell-<=hE"><span class="selected-value select-value-color-purple">string</span></td><td class="cell-uRb`"><span class="selected-value select-value-color-orange">Yes</span></td></tr><tr id="65fbd547-a293-4160-ba1f-b511f01d35c8"><td class="cell-title"><a href="https://www.notion.so/serialNumber-65fbd547a2934160ba1fb511f01d35c8">serialNumber</a></td><td class="cell-<=hE"><span class="selected-value select-value-color-purple">string</span></td><td class="cell-uRb`"><span class="selected-value select-value-color-yellow">No</span></td></tr><tr id="b659333b-310e-4ca8-b6af-76b3ab91e7b8"><td class="cell-title"><a href="https://www.notion.so/b659333b310e4ca8b6af76b3ab91e7b8">Untitled</a></td><td class="cell-<=hE"></td><td class="cell-uRb`"></td></tr></tbody></table></div><p id="c3504d8a-8f7b-4b1b-a96e-0a89521eb5d1" class="">
</p><div id="e34f6505-0a27-49d5-b040-4805f4794d96" class="collection-content"><h4 class="collection-title">Header</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Value</th></tr></thead><tbody><tr id="ba4ef659-4bee-4e91-9e04-0046a5efd071"><td class="cell-title"><a href="https://www.notion.so/Content-Type-ba4ef6594bee4e919e040046a5efd071">Content-Type</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-default">application/json</span></td></tr></tbody></table></div><p id="bcc064d9-0139-4539-a258-4a9948a2f354" class="">
</p><h3 id="8b05ed47-3757-4d60-a8dc-3a2979f1b020" class="">Response:</h3><p id="f3e1d96f-a2f7-4115-9888-f19daf8bcd0d" class="">생성된 유저의 id, username, serialNumber, updatedAt, createdAt, accessToken</p><ul id="877845e8-5f4c-4230-9f1b-fa47d10e5ea9" class="toggle"><li><details open=""><summary>성공:</summary><pre id="c01d2176-0d4c-4c5d-9be5-1e16ce95ff32" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "유저 생성 성공",
    "data": {
        "id": 5,
        "username": "fifthUser",
        "serialNumber": "5",
        "updatedAt": "2020-12-05T16:46:06.253Z",
        "createdAt": "2020-12-05T16:46:06.253Z",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJmaWZ0aFVzZXIiLCJpYXQiOjE2MDcxODY3NjYsImV4cCI6MTYwODQ4Mjc2NiwiaXNzIjoibWFuaXR0b1NhbnRhIn0.B7jAq15cslEy6ZuzS-lLFVr_B8OkNkl3EdYoPd0zzt8"
    }
}</code></pre></details></li></ul><ul id="3f96ce56-b071-4490-96ec-c7f51b9bd7fb" class="toggle"><li><details open=""><summary>실패:</summary><ul id="5c1b57a0-91bf-451c-b26e-fd1b4a7830ae" class="bulleted-list"><li>username이나 serialNumber 없을 시:</li></ul><pre id="15c18ba9-7433-461f-8af6-972d2f73ef25" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다"
}</code></pre><ul id="3070e7e0-631e-4606-8911-3e71ed39ee72" class="bulleted-list"><li>serialNumber 중복 시:</li></ul><pre id="781fb4ae-b0f8-41e9-9dfd-11d4d0df1ae7" class="code"><code>{
    "status": 409,
    "success": false,
    "message": "이미 있는 유저입니다"
}</code></pre></details></li></ul><p id="1b630516-0ac9-45ea-bff5-bded80376a7c" class="">
</p></details></li></ul><ul id="905b5f3e-7b89-4372-ab11-478a2c562365" class="toggle"><li><details open=""><summary>모든 유저 조회</summary><pre id="1947f01d-7eb7-4853-b0b8-5a0414f57f3e" class="code"><code>[GET] <mark class="highlight-blue">/users </mark><strong>모든 유저 조회</strong></code></pre><h3 id="67fa7581-8fc5-40d8-9fa5-165d0d7aae89" class="">Response:</h3><p id="0090ff27-0b09-4bd0-b8ee-aac95a8a9131" class="">각 유저의 id, username</p><ul id="212a4c0c-22a3-4437-a008-b3c93bca1e15" class="toggle"><li><details open=""><summary>성공:</summary><pre id="34246a5d-90d1-48ad-8dbd-4e1901e77d38" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "모든 유저 조회 성공",
    "data": [
        {
            "id": 1,
            "username": "firstUser"
        },
        {
            "id": 2,
            "username": "secondUser"
        },
        {
            "id": 3,
            "username": "thirdUser"
        },
}</code></pre></details></li></ul><p id="dcc0ccb9-22df-4958-9156-254b5d2d0ec5" class="">
</p></details></li></ul><ul id="e15aa65a-76b5-47b1-a1d4-70672eb95951" class="toggle"><li><details open=""><summary>특정 유저 조회</summary><pre id="d7abe44b-2549-4c59-a330-9f645dfa592b" class="code"><code>[GET] <mark class="highlight-blue">/users/:userId </mark><strong>특정 유저 조회</strong></code></pre><h3 id="7f5a9a9a-bb8f-48cb-a9aa-9718bf4ab235" class="">Response:</h3><p id="455883f3-9e20-400e-88af-35beb6b5f7e5" class="">해당 userId를 갖고 있는 유저의 id, username, JoinedRooms</p><ul id="edc7c66c-2386-45f3-9286-3231d66e27f1" class="toggle"><li><details open=""><summary>성공:</summary><pre id="d508dc4e-0d7a-4aaa-a1cd-ae489144f25f" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "유저 조회 성공",
    "data": {
        "id": 3,
        "username": "이다은",
        "JoinedRooms": [
            {
                "id": 1,
                "roomName": "테스트 방",
                "isMatchingDone": false,
								"expiration": "2020-12-30 00:00:00",
                "createdAt": "2020-12-21 14:47:10"
            },
            {
                "id": 2,
                "roomName": "테스트 방222",
                "isMatchingDone": false,
								"expiration": "2020-12-30 00:00:00",
                "createdAt": "2020-12-21 14:47:10"
            }
        ]
    }
}</code></pre><p id="df1d49b9-4cad-4ec6-96e5-88692d4efa2a" class="">
</p></details></li></ul></details></li></ul><ul id="54f3bebd-c8a5-4157-a31d-4c7578c416f1" class="toggle"><li><details open=""><summary>특정 serialNumber로 등록된 유저가 있는지 확인</summary><pre id="a376b4d2-54f1-4649-a947-c7b76e0e4f97" class="code"><code>[GET] <mark class="highlight-blue">/users/check-serial/:serialNumber </mark><strong>serialNumber 확인</strong></code></pre><h3 id="f6007357-1721-4a94-8fbe-f96febdff135" class="">Response:</h3><p id="6759fe72-57f8-4192-b6f7-5ef627f0ae0b" class="">serialNumber로 등록된 유저가 있을 시: 해당 serialNumber를 갖고 있는 유저의 id, username, serialNumber
serialNumber로 등록된 유저가 없을 시: 확인에 사용된 serialNumber</p><ul id="8df98978-a694-4b53-a20c-1f2ef0c09e77" class="toggle"><li><details open=""><summary>유저가 있을 시:</summary><pre id="de76e943-5dba-4754-80d7-b5e764865f12" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "해당 시리얼 넘버를 가진 유저가 있습니다",
    "data": {
        "user": {
            "id": 2,
            "username": "민희",
            "serialNumber": "E12620460215"
        },
        "accessToken": "YxMDg5MjgxNCwiaXNzIOdVrKEiMmg90"
    }
}</code></pre><p id="24034768-d991-4758-ba05-b5cad1fc10c2" class="">
</p></details></li></ul><ul id="7e8ad038-53d2-48d1-a3ed-c4ae55849bfc" class="toggle"><li><details open=""><summary>유저가 없을 시:</summary><pre id="f56d3b22-d086-4166-ab0a-4abd3a270a9f" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "해당 시리얼 넘버를 가진 유저가 없습니다",
    "data": {
        "serialNumber": "2"
    }
}</code></pre><p id="9ae0f20a-9e1b-49ac-ba7e-45d20c37e042" class="">
</p></details></li></ul></details></li></ul><ul id="9a6edd47-c365-4f3d-a176-74915bffbb89" class="toggle"><li><details open=""><summary>유저 삭제</summary><pre id="1dfded59-2077-4341-a04d-8dcca4754856" class="code"><code>[DELETE] <mark class="highlight-blue">/users/:userId </mark><strong>유저 삭제</strong></code></pre></details></li></ul></details></li></ul><ul id="7a43100f-d44f-4407-9564-96803f9686ef" class="toggle"><li><details open=""><summary>방</summary><ul id="a622158b-8524-4b5e-92c2-484a9bc79333" class="toggle"><li><details open=""><summary>방 생성</summary><pre id="73519bf8-b116-4562-b107-55c939dfcfe7" class="code"><code>[POST] <mark class="highlight-blue">/rooms </mark><strong>방 생성</strong></code></pre><p id="5c5b7011-2fd5-45d5-9c92-8ac415ef2f89" class="">
</p><div id="2b9adad3-5d27-4c66-a7db-2e8c35fd341b" class="collection-content"><h4 class="collection-title">Body</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Type</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Required</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesText"><path d="M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z"></path></svg></span>Column</th></tr></thead><tbody><tr id="e1c4f186-bd71-4b23-9a7d-62054564eed8"><td class="cell-title"><a href="https://www.notion.so/roomName-e1c4f186bd714b239a7d62054564eed8">roomName</a></td><td class="cell-<=hE"><span class="selected-value select-value-color-purple">string</span></td><td class="cell-uRb`"><span class="selected-value select-value-color-orange">Yes</span></td><td class="cell->Vn~"></td></tr><tr id="93bb710d-5edc-4b51-9d27-d2513b498e0c"><td class="cell-title"><a href="https://www.notion.so/expiration-93bb710d5edc4b519d27d2513b498e0c">expiration</a></td><td class="cell-<=hE"><span class="selected-value select-value-color-gray">date</span></td><td class="cell-uRb`"><span class="selected-value select-value-color-orange">Yes</span></td><td class="cell->Vn~">"expiration": "2020-12-30 13:00:00",</td></tr><tr id="480ec306-6847-44db-9241-c75f24751820"><td class="cell-title"><a href="https://www.notion.so/missionContents-480ec306684744db9241c75f24751820">missionContents</a></td><td class="cell-<=hE"><span class="selected-value select-value-color-brown">array of strings</span></td><td class="cell-uRb`"><span class="selected-value select-value-color-yellow">No</span></td><td class="cell->Vn~"></td></tr><tr id="f13a8583-7182-48c2-8b3b-ad09e9ae94ab"><td class="cell-title"><a href="https://www.notion.so/f13a8583718248c28b3bad09e9ae94ab">Untitled</a></td><td class="cell-<=hE"></td><td class="cell-uRb`"></td><td class="cell->Vn~"></td></tr><tr id="db680f4a-b7a6-4c19-a2e2-7326e0de46b0"><td class="cell-title"><a href="https://www.notion.so/db680f4ab7a64c19a2e27326e0de46b0">Untitled</a></td><td class="cell-<=hE"></td><td class="cell-uRb`"></td><td class="cell->Vn~"></td></tr></tbody></table></div><p id="e791f972-f9e5-439b-819f-f1c2842b1f76" class="">
</p><div id="76ed2349-7c44-4d2f-a2d9-b5c10f8fb825" class="collection-content"><h4 class="collection-title">Header</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Value</th></tr></thead><tbody><tr id="98d1bd33-d089-414c-8180-1797b0e31cf7"><td class="cell-title"><a href="https://www.notion.so/Content-Type-98d1bd33d089414c81801797b0e31cf7">Content-Type</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-default">application/json</span></td></tr><tr id="e9e540f1-5a95-4314-bf5a-cccc584fbdeb"><td class="cell-title"><a href="https://www.notion.so/jwt-e9e540f15a954314bf5acccc584fbdeb">jwt</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-red">accessToken</span></td></tr></tbody></table></div><p id="578d57fc-593b-48da-a5ac-ac42ca498abb" class="">
</p><h3 id="74c13b5c-139d-4512-b0e8-ac54e80f5368" class="">Response:</h3><p id="94249c0f-927a-4cf0-bf95-c4a4098799f4" class="">생성된 방의 id, roomName, expiration, invitationCode, updatedAt, createdAt</p><ul id="97dd3b95-153f-425d-b78a-184317db16f5" class="toggle"><li><details open=""><summary>성공:</summary><pre id="186051f8-d186-4289-baf4-629600faee48" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "방 생성 성공",
    "data": {
				"isMatchingDone": false,
        "id": 1,
        "roomName": "테스트 방",
        "expiration": "2011-12-03T15:00:00.000Z",
        "invitationCode": "oU3lsEo-",
        "updatedAt": "2020-12-05T16:46:23.719Z",
        "createdAt": "2020-12-05T16:46:23.719Z"
    }
}</code></pre></details></li></ul><ul id="8a56939c-c461-41b2-9e30-82b69c42b6cc" class="toggle"><li><details open=""><summary>실패:</summary><ul id="b50f4376-2582-46a5-bedf-99f0e6fddb08" class="bulleted-list"><li>roomName이나 expiration이 없을 시:</li></ul><pre id="2204a282-a0ff-451b-80f6-8ce3d4fc136e" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다"
}</code></pre><ul id="0a37c0e1-9699-47bb-a8d0-9a2254b076ee" class="bulleted-list"><li>accessToken이 없을 시:</li></ul><pre id="ce6b6a48-b7d4-4b72-a8b7-e267d408b348" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "토큰 값이 없습니다."
}</code></pre></details></li></ul></details></li></ul><ul id="120ef49f-ca08-4b3a-8f74-b2df9c9d5480" class="toggle"><li><details open=""><summary>모든 방 조회</summary><pre id="b492372d-daaf-47da-b4ec-ca5fde0a0994" class="code"><code>[GET] <mark class="highlight-blue">/rooms </mark><strong>모든 방 조회</strong></code></pre><h3 id="1236929f-a4bf-45f1-adf9-2372a103fb4f" class="">Response:</h3><p id="300b1437-eae2-40f2-9c4d-3657c1ec53a5" class="">각 방의 id, roomName, expiration, invitationCode, creatorId</p><ul id="61b7cc15-4a78-4704-9d7e-66826397c5dc" class="toggle"><li><details open=""><summary>성공:
</summary><pre id="2d28a637-47ed-47db-bdbc-b3f4e34a933b" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "모든 방 조회 성공",
    "data": [
        {
            "id": 1,
            "roomName": "테스트 방",
            "invitationCode": "oU3lsEo-",
            "creatorId": 1,
						"expiration": "2011-12-03 15:00:00",
            "createdAt": "2020-12-19 19:28:20"
        },
        {
            "id": 2,
            "roomName": "새로운 방",
            "invitationCode": "pAyfzS4D",
            "creatorId": 1,
						"expiration": "2020-12-29 15:00:00",
            "createdAt": "2020-12-20 15:57:16"
        }
    ]
}</code></pre></details></li></ul></details></li></ul><ul id="e1246703-90ec-402e-9740-76b2c225792f" class="toggle"><li><details open=""><summary>특정 방 조회</summary><pre id="4b0ed55b-2401-4d85-ab6d-b3405a3e7625" class="code"><code>[GET] <mark class="highlight-blue">/rooms/:roomId </mark><strong>특정 방 조회</strong></code></pre><h3 id="53e7b2c3-23ad-4f42-b9e1-3f28f8ad0a89" class="">Response:</h3><p id="6778f438-e992-432f-9d33-efee8c9b98ab" class="">해당 roomId를 갖고 있는 방의 id, roomName, expiration, invitationCode, isMatchingDone, Creator, Missions, Members</p><ul id="d5c46241-cc01-4bf2-8f52-94cc84f1e1c5" class="toggle"><li><details open=""><summary>성공:
</summary><pre id="87fa28f0-3d9c-4137-b586-275714079429" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "방 조회 성공",
    "data": {
        "id": 1,
        "roomName": "테스트 방",
        "invitationCode": "oU3lsEo-",
				"isMatchingDone": "true",
				"expiration": "2020-12-30 00:00:00",
        "createdAt": "2020-12-21 14:47:10",
        "Creator": {
            "id": 1,
            "username": "firstUser",
            "serialNumber": "1"
        },
        "Missions": [
            {
                "id": 1,
                "content": "수고했다고 말하기"
            },
            {
                "id": 2,
                "content": "작은 선물 준비하기"
            },
            {
                "id": 3,
                "content": "칭찬하기"
            },
						{
                "id": 4,
                "content": "밥 사기"
            },
        ],
        "Members": [
            {
                "id": 1,
                "username": "firstUser",
                "relations": {
                    "SantaUserId": 2,
                    "ManittoUserId": 3
                }
            },
            {
                "id": 2,
                "username": "secondUser",
                "relations": {
                    "SantaUserId": 3,
                    "ManittoUserId": 1
                }
            },
            {
                "id": 3,
                "username": "thirdUser",
                "relations": {
                    "SantaUserId": 1,
                    "ManittoUserId": 2
                }
            },
        ]
    }
}</code></pre><p id="09500d8d-f0ef-452e-be68-150535460a27" class="">
</p></details></li></ul></details></li></ul><ul id="37de84e8-7f1c-4ea0-902a-3e9537798b53" class="toggle"><li><details open=""><summary>특정 방 입장</summary><pre id="a2e59a58-e31b-4866-b774-7c91e5974f02" class="code"><code>[POST] <mark class="highlight-blue">/rooms/enter </mark><strong>특정 방 입장</strong></code></pre><p id="dba13f18-bae3-4916-a647-d5658a10e9a2" class="">
</p><div id="f412f94b-eebd-4df7-8287-d40142b75346" class="collection-content"><h4 class="collection-title">Body</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Type</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Required</th></tr></thead><tbody><tr id="356e7365-c94c-48c8-aca7-9a814c191bd1"><td class="cell-title"><a href="https://www.notion.so/invitationCode-356e7365c94c48c8aca79a814c191bd1">invitationCode</a></td><td class="cell-<=hE"><span class="selected-value select-value-color-purple">string</span></td><td class="cell-uRb`"><span class="selected-value select-value-color-orange">Yes</span></td></tr><tr id="39bde543-5bf8-4846-826d-f5dcaf1aa243"><td class="cell-title"><a href="https://www.notion.so/39bde5435bf84846826df5dcaf1aa243">Untitled</a></td><td class="cell-<=hE"></td><td class="cell-uRb`"></td></tr></tbody></table></div><div id="02650eb8-428d-4b1a-9535-fabe81b4f945" class="collection-content"><h4 class="collection-title">Header</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Value</th></tr></thead><tbody><tr id="1c39bcd8-7a1d-492b-83e4-e285538255a4"><td class="cell-title"><a href="https://www.notion.so/Content-Type-1c39bcd87a1d492b83e4e285538255a4">Content-Type</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-default">application/json</span></td></tr><tr id="59ad82f0-197b-468a-9680-09e3a2a7ca87"><td class="cell-title"><a href="https://www.notion.so/jwt-59ad82f0197b468a968009e3a2a7ca87">jwt</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-red">accessToken</span></td></tr></tbody></table></div><p id="6ba3e628-c143-4999-8c0d-074f50708c12" class="">
</p><h3 id="1b5a42ce-b707-4030-b71f-d46a4a425de9" class="">Response:</h3><p id="0c5f996a-8515-431c-9354-9f03aab656a2" class="">입장한 방의 id, roomName, expiration, invitationCode, 그리고 입장한 멤버의 id, username</p><ul id="f056f965-4c71-433d-b9a1-6a5a34b352e7" class="toggle"><li><details open=""><summary>성공:</summary><pre id="87d05c8d-516a-452d-b0ae-d32fbe97861d" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "방 입장 성공",
    "data": {
        "room": {
            "id": 1,
            "roomName": "테스트 방",
            "expiration": "2011-12-03T15:00:00.000Z",
            "invitationCode": "oU3lsEo-"
        },
        "user": {
            "id": 3,
            "username": "thirdUser"
        }
    }
}</code></pre></details></li></ul><ul id="e6aaee0b-f0a3-409d-aa52-18512850fe4a" class="toggle"><li><details open=""><summary>실패:</summary><ul id="913148af-8ce6-428a-bf2a-95f802fdc3c6" class="bulleted-list"><li>accessToken이 없을 시:</li></ul><pre id="5da4854a-45af-4c5c-bd04-53ef5c18e972" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "토큰 값이 없습니다."
}</code></pre><ul id="8f95c88d-6210-4a03-8bae-4e417485359a" class="bulleted-list"><li>invitationCode가 없을 시:</li></ul><pre id="b3235436-263b-4431-b83f-a64cd711b3ed" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다"
}</code></pre><ul id="87274c31-ac84-4e36-9bc7-2e01c9350b1f" class="bulleted-list"><li>해당 invitationCode를 가진 방이 없을 시:</li></ul><pre id="deb15fa0-c7bf-4c1d-a414-31490eb65916" class="code"><code>{
    "status": 404,
    "success": false,
    "message": "초대코드가 잘못되었습니다"
}</code></pre><ul id="59a4a0a3-cad8-43fa-8638-9ed5b546c40e" class="bulleted-list"><li>해당 방에 이미 입장했을 시:</li></ul><pre id="312b9241-40c7-436d-83d7-8bfe66b61013" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "이미 있는 멤버입니다"
}</code></pre></details></li></ul></details></li></ul><ul id="06cb9fdf-1329-4042-90af-f61eaf5b7590" class="toggle"><li><details open=""><summary>특정 방에서 마니또 매칭 (방장만 가능)</summary><pre id="98fb2531-dafd-4f7e-9371-da045735b472" class="code"><code>[POST] <mark class="highlight-blue">/rooms/match </mark><strong>특정 방에서 마니또 매칭</strong></code></pre><p id="0c3cc001-925f-4416-829c-11b17b15792b" class="">
</p><div id="2374343a-e7db-4807-902e-8dcac84aec86" class="collection-content"><h4 class="collection-title">Body</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Type</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Required</th></tr></thead><tbody><tr id="f0f80ed5-9e54-4dbb-9225-87954e4fe003"><td class="cell-title"><a href="https://www.notion.so/roomId-f0f80ed59e544dbb922587954e4fe003">roomId</a></td><td class="cell-<=hE"><span class="selected-value select-value-color-default">integer</span></td><td class="cell-uRb`"><span class="selected-value select-value-color-orange">Yes</span></td></tr><tr id="04ad7952-1177-4087-aae1-f34eb88f2a0d"><td class="cell-title"><a href="https://www.notion.so/04ad795211774087aae1f34eb88f2a0d">Untitled</a></td><td class="cell-<=hE"></td><td class="cell-uRb`"></td></tr><tr id="d97c0d1f-380a-4b04-ad50-846ccca36988"><td class="cell-title"><a href="https://www.notion.so/d97c0d1f380a4b04ad50846ccca36988">Untitled</a></td><td class="cell-<=hE"></td><td class="cell-uRb`"></td></tr></tbody></table></div><p id="df4ac23b-3e24-4e13-a760-c3901720021b" class="">
</p><div id="0e8e74a5-5a5d-4df8-a0ef-a6f86b98e8c5" class="collection-content"><h4 class="collection-title">Header</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Value</th></tr></thead><tbody><tr id="5f2ff037-d3a4-49c9-8f98-139b8ca79347"><td class="cell-title"><a href="https://www.notion.so/Content-Type-5f2ff037d3a449c98f98139b8ca79347">Content-Type</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-default">application/json</span></td></tr><tr id="7d830119-bdc5-4642-9ed1-a494fff0c7e3"><td class="cell-title"><a href="https://www.notion.so/jwt-7d830119bdc546429ed1a494fff0c7e3">jwt</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-red">accessToken</span></td></tr></tbody></table></div><p id="c93330b3-1207-4e6e-827f-7de44726685e" class="">
</p><h3 id="044561c8-4762-4cc4-bcd7-76baf0cdd5d8" class="">Response:</h3><p id="108f61ae-118e-46c0-97dd-ef50a4fdc27e" class="">매칭이 완료된 멤버들의 UserId, SantaUserId, ManittoUserId, MyMission</p><ul id="a32aa162-72ef-4915-90f4-dee1534628a2" class="toggle"><li><details open=""><summary>성공:</summary><pre id="e34d788e-fd20-43c4-9f10-6e4f703a620d" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "매칭 성공",
    "data": [
        {
            "UserId": 1,
            "SantaUserId": 2,
            "ManittoUserId": 3,
            "MyMission": {
                "content": "수고했다고 말하기"
            }
        },
        {
            "UserId": 2,
            "SantaUserId": 3,
            "ManittoUserId": 1,
            "MyMission": {
                "content": "칭찬하기"
            }
        },
        {
            "UserId": 3,
            "SantaUserId": 1,
            "ManittoUserId": 2,
            "MyMission": {
                "content": "작은 선물 준비하기"
            }
        },
    ]
}</code></pre></details></li></ul><ul id="388c6a20-ecec-4d21-bdaa-9bea1b769f42" class="toggle"><li><details open=""><summary>실패:</summary><ul id="fe81c7e9-a43c-47ac-9fea-fccc1aa29add" class="bulleted-list"><li>accessToken이 없을 시:</li></ul><pre id="bc9674a6-cfad-45f4-a0b5-0a9b6ed88b5f" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "토큰 값이 없습니다."
}</code></pre><ul id="172444f6-3c5d-414c-b46d-2782e3eeb0d9" class="bulleted-list"><li>roomId가 없을 시:</li></ul><pre id="7d209b6a-5af8-4fdc-8fc2-0cd514d83071" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다"
}</code></pre></details></li></ul></details></li></ul><ul id="7c45ae4f-db71-4595-ade2-55a95be0fa87" class="toggle"><li><details open=""><summary>특정 방에서 내 미션, 마니또, 산타, 산타의 미션 조회</summary><pre id="6f9fead9-a4e4-4c11-820c-7e3cc4ebca7d" class="code"><code>[GET] <mark class="highlight-blue">/rooms/:roomId/my </mark><strong>특정 방에서 내 미션, 마니또, 산타 조회</strong></code></pre><p id="66400d86-b9bf-4904-97bc-5c656081401a" class="">
</p><div id="f0e98e42-a692-414a-989a-603491604886" class="collection-content"><h4 class="collection-title">Header</h4><table class="collection-content"><thead><tr><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesTitle"><path d="M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z"></path></svg></span>Key</th><th><span class="icon property-icon"><svg viewBox="0 0 14 14" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.4);flex-shrink:0;-webkit-backface-visibility:hidden" class="typesSelect"><path d="M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z"></path></svg></span>Value</th></tr></thead><tbody><tr id="4c409509-c1a4-4fcd-9780-8e5dccf6050c"><td class="cell-title"><a href="https://www.notion.so/Content-Type-4c409509c1a44fcd97808e5dccf6050c">Content-Type</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-default">application/json</span></td></tr><tr id="44e1be02-5f96-4b02-8a63-22c947f09897"><td class="cell-title"><a href="https://www.notion.so/jwt-44e1be025f964b028a6322c947f09897">jwt</a></td><td class="cell-]r}z"><span class="selected-value select-value-color-red">accessToken</span></td></tr></tbody></table></div><p id="c3b8aeb5-efdf-41f7-a38d-bd45071f573b" class="">
</p><h3 id="999238c5-a092-494c-b98b-b781fcace0d2" class="">Response:</h3><p id="64b68b10-b282-4da8-9d18-a687d91155ba" class="">내 UserId, SantaUserId, ManittoUserId, MyMission, MissionToMe</p><ul id="fa4a5f46-4d75-441b-825b-9be8cae5eaea" class="toggle"><li><details open=""><summary>성공:</summary><pre id="56a1edf3-b995-48d8-8ea2-ad2e3cdff3c0" class="code"><code>{
    "status": 200,
    "success": true,
    "message": "내 관계 정보 조회 성공",
    "data": {
        "UserId": 6,
        "SantaUserId": 4,
        "ManittoUserId": 2,
        "MyMission": {
            "content": "하나"
        },
        "MissionToMe": {
            "content": "셋"
        }
    }
}</code></pre></details></li></ul><ul id="81228673-1fb0-4fb8-9aa0-c38597b443ed" class="toggle"><li><details open=""><summary>실패:</summary><ul id="bc39545c-4aa6-4bbb-8ab7-5b3ad8724210" class="bulleted-list"><li>accessToken이 없을 시:</li></ul><pre id="002ca48a-aff4-45f9-9481-e16f0d0bc196" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "토큰 값이 없습니다."
}</code></pre><ul id="c473646f-9ad8-49f0-8e1e-8f2c38a84eca" class="bulleted-list"><li>roomId가 없을 시:</li></ul><pre id="0486d302-269f-442d-a687-591f2aba3b0e" class="code"><code>{
    "status": 400,
    "success": false,
    "message": "필요한 값이 없습니다"
}</code></pre><ul id="fd1e7a30-29d6-4ef4-b081-509b94bea937" class="bulleted-list"><li>해당 방에 입장하지 않았을 시:</li></ul><pre id="63602d58-44ac-4636-acac-a18088d84056" class="code"><code>{
    "status": 404,
    "success": false,
    "message": "해당 방에 입장하지 않았습니다"
}</code></pre></details></li></ul></details></li></ul><ul id="523af36c-6d96-43de-a4c4-c06e7597ad85" class="toggle"><li><details open=""><summary>방 삭제</summary><pre id="486787cb-d279-45f8-91a9-2cf440de706b" class="code"><code>[DELETE] <mark class="highlight-blue">/rooms/:roomId </mark><strong>방 삭제</strong></code></pre></details></li></ul></details></li></ul></details></li></ul><p id="3b5d892a-c7e7-4d5d-865c-f492e50bd45d" class="">
</p></div></article></body>
