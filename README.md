# API Docs

baseURL: http://xx.xx.xxx.xx:3003/manitto/v1

- api
    - 공통사항
        - 반환값:

            모든 요청은 JSON형식의 데이터를 반환합니다. 

        - 방 자동 입장:

            방을 생성한 유저는 자동으로 그 방에 입장합니다.

        (검토하면서 공통으로 참고할만한 사항 추가 예정)

    - 유저
        - 유저 생성

            ```xml
            [POST] /users **유저 생성**
            ```

            [Body](https://www.notion.so/6c10f6c7754c41c8b66119b8ed6aeaac)

            [Header](https://www.notion.so/e34f65050a2749d5b0404805f4794d96)

            ### Response:

            생성된 유저의 id, username, serialNumber, updatedAt, createdAt, accessToken

            - 성공:

                ```json
                {
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
                }
                ```

            - 실패:
                - username이나 serialNumber 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "필요한 값이 없습니다"
                }
                ```

                - serialNumber 중복 시:

                ```json
                {
                    "status": 409,
                    "success": false,
                    "message": "이미 있는 유저입니다"
                }
                ```

        - 모든 유저 조회

            ```xml
            [GET] /users **모든 유저 조회**
            ```

            ### Response:

            각 유저의 id, username

            - 성공:

                ```json
                {
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
                }
                ```

        - 특정 유저 조회

            ```xml
            [GET] /users/:userId **특정 유저 조회**
            ```

            ### Response:

            해당 userId를 갖고 있는 유저의 id, username, JoinedRooms

            - 성공:

                ```json
                {
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
                }
                ```

        - 특정 serialNumber로 등록된 유저가 있는지 확인

            ```xml
            [GET] /users/check-serial/:serialNumber **serialNumber 확인**
            ```

            ### Response:

            serialNumber로 등록된 유저가 있을 시: 해당 serialNumber를 갖고 있는 유저의 id, username, serialNumber
            serialNumber로 등록된 유저가 없을 시: 확인에 사용된 serialNumber

            - 유저가 있을 시:

                ```json
                {
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
                }
                ```

            - 유저가 없을 시:

                ```json
                {
                    "status": 200,
                    "success": true,
                    "message": "해당 시리얼 넘버를 가진 유저가 없습니다",
                    "data": {
                        "serialNumber": "2"
                    }
                }
                ```

        - 유저 삭제

            ```xml
            [DELETE] /users/:userId **유저 삭제**
            ```

    - 방
        - 방 생성

            ```xml
            [POST] /rooms **방 생성**
            ```

            [Body](https://www.notion.so/2b9adad35d274c66a7db2e8c35fd341b)

            [Header](https://www.notion.so/76ed23497c444d2fa2d9b5c10f8fb825)

            ### Response:

            생성된 방의 id, roomName, expiration, invitationCode, updatedAt, createdAt

            - 성공:

                ```json
                {
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
                }
                ```

            - 실패:
                - roomName이나 expiration이 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "필요한 값이 없습니다"
                }
                ```

                - accessToken이 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "토큰 값이 없습니다."
                }
                ```

        - 모든 방 조회

            ```xml
            [GET] /rooms **모든 방 조회**
            ```

            ### Response:

            각 방의 id, roomName, expiration, invitationCode, creatorId

            - 성공:

                ```json
                {
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
                }
                ```

        - 특정 방 조회

            ```xml
            [GET] /rooms/:roomId **특정 방 조회**
            ```

            ### Response:

            해당 roomId를 갖고 있는 방의 id, roomName, expiration, invitationCode, isMatchingDone, Creator, Missions, Members

            - 성공:

                ```json
                {
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
                }
                ```

        - 특정 방 입장

            ```xml
            [POST] /rooms/enter **특정 방 입장**
            ```

            [Body](https://www.notion.so/f412f94beebd4df78287d40142b75346)

            [Header](https://www.notion.so/02650eb8428d4b1a9535fabe81b4f945)

            ### Response:

            입장한 방의 id, roomName, expiration, invitationCode, 그리고 입장한 멤버의 id, username

            - 성공:

                ```json
                {
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
                }
                ```

            - 실패:
                - accessToken이 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "토큰 값이 없습니다."
                }
                ```

                - invitationCode가 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "필요한 값이 없습니다"
                }
                ```

                - 해당 invitationCode를 가진 방이 없을 시:

                ```json
                {
                    "status": 404,
                    "success": false,
                    "message": "초대코드가 잘못되었습니다"
                }
                ```

                - 해당 방에 이미 입장했을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "이미 있는 멤버입니다"
                }
                ```

        - 특정 방에서 마니또 매칭 (방장만 가능)

            ```xml
            [POST] /rooms/match **특정 방에서 마니또 매칭**
            ```

            [Body](https://www.notion.so/2374343ae7db4807902e8dcac84aec86)

            [Header](https://www.notion.so/0e8e74a55a5d4df8a0efa6f86b98e8c5)

            ### Response:

            매칭이 완료된 멤버들의 UserId, SantaUserId, ManittoUserId, MyMission

            - 성공:

                ```json
                {
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
                }
                ```

            - 실패:
                - accessToken이 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "토큰 값이 없습니다."
                }
                ```

                - roomId가 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "필요한 값이 없습니다"
                }
                ```

        - 특정 방에서 내 미션, 마니또, 산타, 산타의 미션 조회

            ```xml
            [GET] /rooms/:roomId/my **특정 방에서 내 미션, 마니또, 산타 조회**
            ```

            [Header](https://www.notion.so/f0e98e42a692414a989a603491604886)

            ### Response:

            내 UserId, SantaUserId, ManittoUserId, MyMission, MissionToMe

            - 성공:

                ```json
                {
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
                }
                ```

            - 실패:
                - accessToken이 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "토큰 값이 없습니다."
                }
                ```

                - roomId가 없을 시:

                ```json
                {
                    "status": 400,
                    "success": false,
                    "message": "필요한 값이 없습니다"
                }
                ```

                - 해당 방에 입장하지 않았을 시:

                ```json
                {
                    "status": 404,
                    "success": false,
                    "message": "해당 방에 입장하지 않았습니다"
                }
                ```

        - 방 삭제

            ```xml
            [DELETE] /rooms/:roomId **방 삭제**
            ```