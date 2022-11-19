import {getDurationTime, getDurationTexts, userForceQuit} from './AnalyseTranscriptInteractor.js'

export function avgDurationTexts(text_transcripts){
        if (text_transcripts.length > 0){
        let total_duration = 0;
        for (let text_transcript in text_transcripts){
            total_duration += getDurationTexts(text_transcript);
        }
        return total_duration/text_transcripts.length;
        }

        return 0;

    }

export function avgDurationTime(transcripts){
        let total_duration = 0;
        for (let transcript in transcripts){
            total_duration += getDurationTime(transcript);
        }
        return total_duration/transcripts.length;

    }

export function totalUsersForceQuit(transcripts){
        let i = 0;
        let l = transcripts.length;
        for (let j=0; j < l; j ++){

            let transcript = transcripts[j];
            if (userForceQuit(transcript.transcript_data)){
                i += 1;
            }
        }
        return i;
    }






const transcripts = [
    {
        "_id": "6375d68dbbb300d2ed56ade9",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "request",
                "payload": {
                    "label": "Returns & Exchanges",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "path": "choice:1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702023d6b5111846a692ca"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{returns_and_exchanges}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "request",
                "payload": {
                    "query": "take to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "take to an agent"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, take to an agent!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637023d6d6b5111846a6933e"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "sg6uv3fhx",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What items would you like to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What items would you like to return or exchange?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:55.380Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:18:55.380Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "zx1o0psv",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "6375d68dbbb300d2ed56adeb",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "6375d68dbbb300d2ed56aded",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "request",
                "payload": {
                    "label": "Missing, Damanged, or Incorrect Item",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "path": "choice:3"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370206ad6b5111846a692db"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{missing_damanged_item}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "request",
                "payload": {
                    "query": "Marco",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "request",
                "payload": {
                    "query": "I dont feel comfortable providing my email",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "Marco"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, Marco!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "request",
                "payload": {
                    "query": "123456",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020f9d6b5111846a692fc"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702120d6b5111846a6930c"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "6375d68dbbb300d2ed56adef",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "request",
                "payload": {
                    "label": "Missing, Damanged, or Incorrect Item",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "path": "choice:3"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370206ad6b5111846a692db"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{missing_damanged_item}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "request",
                "payload": {
                    "query": "Marco",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "request",
                "payload": {
                    "query": "marco@rogers.com",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "Marco"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, Marco!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "request",
                "payload": {
                    "query": "na",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020f9d6b5111846a692fc"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702120d6b5111846a6930c"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "6375d68ebbb300d2ed56adf1",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "request",
                "payload": {
                    "label": "Returns & Exchanges",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "path": "choice:1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702023d6b5111846a692ca"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{returns_and_exchanges}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "request",
                "payload": {
                    "query": "John",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "request",
                "payload": {
                    "query": "john@bell.net",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "John"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, John!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "request",
                "payload": {
                    "query": "123456",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637023d6d6b5111846a6933e"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "sg6uv3fhx",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What items would you like to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What items would you like to return or exchange?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:32.153Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:16:32.153Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "request",
                "payload": {
                    "query": "everything",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "091e01h2",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "request",
                "payload": {
                    "query": "everything",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63764e679e1877488f18d258",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "request",
                "payload": {
                    "label": "Returns & Exchanges",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "path": "choice:1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702023d6b5111846a692ca"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{returns_and_exchanges}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "request",
                "payload": {
                    "query": "take to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "take to an agent"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, take to an agent!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637023d6d6b5111846a6933e"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "sg6uv3fhx",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What items would you like to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What items would you like to return or exchange?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:55.380Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:18:55.380Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "zx1o0psv",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63764e679e1877488f18d25a",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63764e679e1877488f18d25c",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "request",
                "payload": {
                    "label": "Missing, Damanged, or Incorrect Item",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "path": "choice:3"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370206ad6b5111846a692db"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{missing_damanged_item}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "request",
                "payload": {
                    "query": "Marco",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "request",
                "payload": {
                    "query": "I dont feel comfortable providing my email",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "Marco"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, Marco!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "request",
                "payload": {
                    "query": "123456",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020f9d6b5111846a692fc"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702120d6b5111846a6930c"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63764e689e1877488f18d25e",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "request",
                "payload": {
                    "label": "Missing, Damanged, or Incorrect Item",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "path": "choice:3"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370206ad6b5111846a692db"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{missing_damanged_item}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "request",
                "payload": {
                    "query": "Marco",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "request",
                "payload": {
                    "query": "marco@rogers.com",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "Marco"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, Marco!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "request",
                "payload": {
                    "query": "na",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020f9d6b5111846a692fc"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702120d6b5111846a6930c"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63764e689e1877488f18d260",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "request",
                "payload": {
                    "label": "Returns & Exchanges",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "path": "choice:1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702023d6b5111846a692ca"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{returns_and_exchanges}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "request",
                "payload": {
                    "query": "John",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "request",
                "payload": {
                    "query": "john@bell.net",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "John"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, John!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "request",
                "payload": {
                    "query": "123456",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637023d6d6b5111846a6933e"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "sg6uv3fhx",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What items would you like to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What items would you like to return or exchange?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:32.153Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:16:32.153Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "request",
                "payload": {
                    "query": "everything",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "091e01h2",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "request",
                "payload": {
                    "query": "everything",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63783a39b029eb9564a79f13",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:18:38.916Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "request",
                "payload": {
                    "label": "Returns & Exchanges",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "path": "choice:1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702023d6b5111846a692ca"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{returns_and_exchanges}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:40.616Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "request",
                "payload": {
                    "query": "take to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:45.924Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "take to an agent"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, take to an agent!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:51.044Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "637023d6d6b5111846a6933e"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "sg6uv3fhx",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What items would you like to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What items would you like to return or exchange?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:18:55.335Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:55.380Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:18:55.380Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:18:59.728Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "zx1o0psv",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:18:59.757Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:19:04.415Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63783a39b029eb9564a79f15",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:18:29.324Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "request",
                "payload": {
                    "query": "talk to an agent",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:18:32.609Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63783a39b029eb9564a79f17",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:17:30.760Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "request",
                "payload": {
                    "label": "Missing, Damanged, or Incorrect Item",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "path": "choice:3"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370206ad6b5111846a692db"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{missing_damanged_item}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:33.359Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "request",
                "payload": {
                    "query": "Marco",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:38.555Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "request",
                "payload": {
                    "query": "I dont feel comfortable providing my email",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "Marco"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, Marco!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:49.790Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "request",
                "payload": {
                    "query": "123456",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020f9d6b5111846a692fc"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702120d6b5111846a6930c"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:18:05.163Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63783a39b029eb9564a79f19",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:17:02.265Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "request",
                "payload": {
                    "label": "Missing, Damanged, or Incorrect Item",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "path": "choice:3"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370206ad6b5111846a692db"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{missing_damanged_item}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:04.366Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "request",
                "payload": {
                    "query": "Marco",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:08.831Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "request",
                "payload": {
                    "query": "marco@rogers.com",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "Marco"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, Marco!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:15.808Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "request",
                "payload": {
                    "query": "na",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020f9d6b5111846a692fc"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702120d6b5111846a6930c"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:17:23.375Z",
                "format": "trace",
                "payload": null
            }
        ]
    },
    {
        "_id": "63783a39b029eb9564a79f1b",
        "project_id": "6370193f1950d7b37aa2f018",
        "transcript_data": [
            {
                "type": "launch",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "launch",
                "payload": null
            },
            {
                "type": "flow",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "diagramID": "6370193f1950d7b37aa2f019"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "start00000000000000000000"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "type": "start",
                    "message": "beginning flow"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "63068ee2b9d93f34f5d1f11a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "73r23sar",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Welcome to the Antighost Ghost Club! How can I help you today?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Welcome to the Antighost Ghost Club! How can I help you today?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "choice",
                "startTime": "2022-11-15T02:15:56.262Z",
                "format": "trace",
                "payload": {
                    "buttons": [
                        {
                            "name": "Returns & Exchanges",
                            "request": {
                                "type": "path-jr40q3fb6",
                                "payload": {
                                    "label": "Returns & Exchanges",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Placing & Cancelling Orders",
                            "request": {
                                "type": "path-af41w3fnm",
                                "payload": {
                                    "label": "Placing & Cancelling Orders",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Missing, Damanged, or Incorrect Item",
                            "request": {
                                "type": "path-bl4273fl4",
                                "payload": {
                                    "label": "Missing, Damanged, or Incorrect Item",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Something Else",
                            "request": {
                                "type": "path-lu42j3frm",
                                "payload": {
                                    "label": "Something Else",
                                    "actions": []
                                }
                            }
                        },
                        {
                            "name": "Style me!",
                            "request": {
                                "type": "path-r5ac63fs1",
                                "payload": {
                                    "label": "Style me!",
                                    "actions": []
                                }
                            }
                        }
                    ]
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "request",
                "payload": {
                    "label": "Returns & Exchanges",
                    "actions": []
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701b62d6b5111846a6921e"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "path": "choice:1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63702023d6b5111846a692ca"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - changes:\n`{returns_and_exchanges}`: `0` => `1`"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c59d6b5111846a69236"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "o245y3f48",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What's your name?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What's your name?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:10.388Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "request",
                "payload": {
                    "query": "John",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701d9fd6b5111846a69272"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e53d6b5111846a6927a"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "ik4zv3f51",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "And your email?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "And your email?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:18.319Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "request",
                "payload": {
                    "query": "john@bell.net",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701e72d6b5111846a6928d"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701c9ad6b5111846a69241"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "l14943fpu",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Hi, "
                                    },
                                    {
                                        "text": "John"
                                    },
                                    {
                                        "text": "!  Can I get your order number? If that's not applicable, type \"NA\"."
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Hi, John!  Can I get your order number? If that's not applicable, type \"NA\"."
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:24.584Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "request",
                "payload": {
                    "query": "123456",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701eb7d6b5111846a69297"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "path": "capture"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "63701ec7d6b5111846a6929e"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "no conditions matched - taking else path"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637026efd6b5111846a69380"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637020a5d6b5111846a692ef"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "code",
                    "message": "evaluating code - no variable changes"
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "type": "ifV2",
                    "message": "condition matched - taking path 1"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "637023d6d6b5111846a6933e"
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "sg6uv3fhx",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "What items would you like to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "What items would you like to return or exchange?"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:16:32.119Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:32.153Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:16:32.153Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": true
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "request",
                "payload": {
                    "query": "everything",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "goto",
                "startTime": "2022-11-15T02:16:37.170Z",
                "format": "trace",
                "payload": {
                    "request": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "request",
                "payload": {
                    "intent": {
                        "name": "capture_item_live_agent_okpdfjgg"
                    },
                    "query": "",
                    "entities": []
                }
            },
            {
                "type": "text",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "trace",
                "payload": {
                    "slate": {
                        "id": "091e01h2",
                        "content": [
                            {
                                "children": [
                                    {
                                        "text": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                                    }
                                ]
                            }
                        ]
                    },
                    "message": "Sorry, I didn't catch that. What items do you want to return or exchange?"
                }
            },
            {
                "type": "entity-filling",
                "startTime": "2022-11-15T02:16:37.209Z",
                "format": "trace",
                "payload": {
                    "entityToFill": "item",
                    "intent": {
                        "type": "intent",
                        "payload": {
                            "intent": {
                                "name": "capture_item_live_agent_okpdfjgg"
                            },
                            "query": "",
                            "entities": []
                        },
                        "ELICIT": false
                    }
                }
            },
            {
                "type": "request",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "request",
                "payload": {
                    "query": "everything",
                    "intent": {
                        "name": "None"
                    },
                    "entities": []
                }
            },
            {
                "type": "debug",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "type": "intent",
                    "message": "matched intent **None** - confidence interval _100.00%_"
                }
            },
            {
                "type": "block",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "blockID": "6370242ad6b5111846a69346"
                }
            },
            {
                "type": "path",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": {
                    "path": "choice:else"
                }
            },
            {
                "type": "end",
                "startTime": "2022-11-15T02:16:42.196Z",
                "format": "trace",
                "payload": null
            }
        ]
    }
]

console.log(transcripts[0].transcript_data.length)
console.log(totalUsersForceQuit(transcripts))