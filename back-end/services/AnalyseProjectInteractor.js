import {getDurationTime, getDurationTexts, userForceQuit} from './AnalyseTranscriptInteractor.js'

export function avgDurationTexts(text_transcripts){
        if (text_transcripts.length > 0){
        let total_duration = 0;
        let l = text_transcripts.length;
        for (let j=0; j< l; j++){
            total_duration += getDurationTexts(text_transcripts[j].dialogue);
        }
        return total_duration/l;
        }

        return 0;

    }

export function avgDurationTime(transcripts) {
    let total_duration = 0;
    let l = transcripts.length;
    for (let j = 0; j < l; j++) {
        let transcript = transcripts[j];
        total_duration += getDurationTime(transcript.transcript_data);
    }
    return total_duration / transcripts.length;
}

export function totalUsersForceQuit(text_transcripts){
        let i = 0;
        let l = text_transcripts.length;
        for (let j=0; j < l; j ++){

            let transcript = text_transcripts[j];
            if (userForceQuit(transcript.dialogue)){
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

let text_transcripts = [
    {
        "_id": "63785effbca96fb0c6d187de",
        "project_id": "636bf5eb6ca8dfcaff6070c7",
        "dialogue": [
            {
                "speaker": "bot",
                "text": "The Voiceflow hotel would like to extend a warm welcome to all of our guests. Who am I speaking to?"
            },
            {
                "speaker": "human",
                "text": "Joe"
            },
            {
                "speaker": "bot",
                "text": "Nice to meet you Joe! Do you have a reservation?"
            },
            {
                "speaker": "bot",
                "text": "Awesome! In order to authenticate your hotel reservation, we must validate your booking number. It's important to remember that it's a five-digit number."
            },
            {
                "speaker": "human",
                "text": "12345"
            },
            {
                "speaker": "bot",
                "text": "entering flow `636bf5ec6ca8dfcaff6070cd`"
            },
            {
                "speaker": "bot",
                "text": "Perfect. I've located your booking. Depending on what you're looking for I can likely point you in the right direction! Please select one of the options below."
            },
            {
                "speaker": "human",
                "text": "Recommendations "
            },
            {
                "speaker": "bot",
                "text": "I can provide you with some of the city's best offers as well as information on restaurants and cultural events. What can I search for you?"
            },
            {
                "speaker": "human",
                "text": "Library"
            },
            {
                "speaker": "bot",
                "text": "Seems that the utterance you used is not an template's options. You can open each intent to view the utterances or add the one you said. Let's try and get information about ."
            },
            {
                "speaker": "human",
                "text": "Fod"
            },
            {
                "speaker": "bot",
                "text": "Try triggering a hotel concierge assistant option now."
            },
            {
                "speaker": "human",
                "text": "Food"
            }
        ]
    },
    {
        "_id": "63785effbca96fb0c6d187e0",
        "project_id": "636bf5eb6ca8dfcaff6070c7",
        "dialogue": [
            {
                "speaker": "bot",
                "text": "The Voiceflow hotel would like to extend a warm welcome to all of our guests. Who am I speaking to?"
            },
            {
                "speaker": "human",
                "text": "Bill"
            },
            {
                "speaker": "bot",
                "text": "Nice to meet you Bill! Do you have a reservation?"
            },
            {
                "speaker": "bot",
                "text": "Awesome! In order to authenticate your hotel reservation, we must validate your booking number. It's important to remember that it's a five-digit number."
            },
            {
                "speaker": "human",
                "text": "12345"
            },
            {
                "speaker": "bot",
                "text": "entering flow `636bf5ec6ca8dfcaff6070cd`"
            },
            {
                "speaker": "bot",
                "text": "Perfect. I've located your booking. Depending on what you're looking for I can likely point you in the right direction! Please select one of the options below."
            },
            {
                "speaker": "human",
                "text": "Recommendations "
            },
            {
                "speaker": "bot",
                "text": "I can provide you with some of the city's best offers as well as information on restaurants and cultural events. What can I search for you?"
            },
            {
                "speaker": "human",
                "text": "Culture"
            },
            {
                "speaker": "bot",
                "text": "matched command **jump** - jumping to node"
            },
            {
                "speaker": "bot",
                "text": "could not handle step - redirecting to the next step"
            },
            {
                "speaker": "bot",
                "text": "What can we recommend for you today?"
            },
            {
                "speaker": "bot",
                "text": "If you leave through the front entrance of the hotel and make a right down Ferry Street you can find the Exhibition. The distance is approximately 0.3 km. You can buy tickets for $20 dollars at the front gate."
            },
            {
                "speaker": "bot",
                "text": "entering flow `636bf5ec6ca8dfcaff6070cc`"
            },
            {
                "speaker": "bot",
                "text": "What else can I do for you?  Depending on what you need, you can trigger the below options."
            },
            {
                "speaker": "human",
                "text": "Recommendations"
            },
            {
                "speaker": "bot",
                "text": "I can provide you with some of the city's best offers as well as information on restaurants and cultural events. What can I search for you?"
            },
            {
                "speaker": "human",
                "text": "Sleep"
            }
        ]
    },
    {
        "_id": "63785f00bca96fb0c6d187e2",
        "project_id": "636bf5eb6ca8dfcaff6070c7",
        "dialogue": [
            {
                "speaker": "bot",
                "text": "The Voiceflow hotel would like to extend a warm welcome to all of our guests. Who am I speaking to?"
            },
            {
                "speaker": "human",
                "text": "Bob"
            },
            {
                "speaker": "bot",
                "text": "Nice to meet you Bob! Do you have a reservation?"
            },
            {
                "speaker": "bot",
                "text": "Awesome! In order to authenticate your hotel reservation, we must validate your booking number. It's important to remember that it's a five-digit number."
            },
            {
                "speaker": "human",
                "text": "12345"
            },
            {
                "speaker": "bot",
                "text": "entering flow `636bf5ec6ca8dfcaff6070cd`"
            },
            {
                "speaker": "bot",
                "text": "Perfect. I've located your booking. Depending on what you're looking for I can likely point you in the right direction! Please select one of the options below."
            },
            {
                "speaker": "human",
                "text": "Recommendations "
            },
            {
                "speaker": "bot",
                "text": "I can provide you with some of the city's best offers as well as information on restaurants and cultural events. What can I search for you?"
            },
            {
                "speaker": "human",
                "text": "Restaurants"
            },
            {
                "speaker": "bot",
                "text": "matched command **jump** - jumping to node"
            },
            {
                "speaker": "bot",
                "text": "could not handle step - redirecting to the next step"
            },
            {
                "speaker": "bot",
                "text": "Near the Voiceflow hotel, there are a variety of local culinary options. The city center is 0.5km away, where you'll discover BellaNappoli's restaurant , and La casa de Voiceflow, all of which are delicious restaurants."
            },
            {
                "speaker": "bot",
                "text": "entering flow `636bf5ec6ca8dfcaff6070cc`"
            },
            {
                "speaker": "bot",
                "text": "Is there anything else I can do? Please keep in mind that you can select from the available options below."
            },
            {
                "speaker": "human",
                "text": "Hotel"
            },
            {
                "speaker": "bot",
                "text": "matched command **jump** - jumping to node"
            },
            {
                "speaker": "bot",
                "text": "could not handle step - redirecting to the next step"
            },
            {
                "speaker": "bot",
                "text": "I'm here to assist you with everything hotel-related, such as changing your accommodation, or modify night's booked."
            },
            {
                "speaker": "human",
                "text": "Room change"
            },
            {
                "speaker": "bot",
                "text": "matched command **jump** - jumping to node"
            },
            {
                "speaker": "bot",
                "text": "could not handle step - redirecting to the next step"
            },
            {
                "speaker": "bot",
                "text": "You have a room on the 5th floor available. 503 is your new room number. Take the elevators to the left of the hotel lobby to the 5th floor to find your room. After that, turn right and proceed straight down the corridor."
            },
            {
                "speaker": "bot",
                "text": "We hope you enjoy this new room."
            },
            {
                "speaker": "bot",
                "text": "entering flow `636bf5ec6ca8dfcaff6070cc`"
            },
            {
                "speaker": "bot",
                "text": "Is there anything else I can do? Please keep in mind that you can select from the available options below."
            },
            {
                "speaker": "human",
                "text": "Recommendations"
            },
            {
                "speaker": "bot",
                "text": "I can provide you with some of the city's best offers as well as information on restaurants and cultural events. What can I search for you?"
            },
            {
                "speaker": "human",
                "text": "Food"
            }
        ]
    },
    {
        "_id": "63785f00bca96fb0c6d187e4",
        "project_id": "636bf5eb6ca8dfcaff6070c7",
        "dialogue": [
            {
                "speaker": "bot",
                "text": "The Voiceflow hotel would like to extend a warm welcome to all of our guests. Who am I speaking to?"
            },
            {
                "speaker": "human",
                "text": "Chelsea"
            },
            {
                "speaker": "bot",
                "text": "I didn't get your name. Could you repeat it?"
            },
            {
                "speaker": "human",
                "text": "Chelsea"
            },
            {
                "speaker": "bot",
                "text": "Could you repeat your name, please?"
            },
            {
                "speaker": "human",
                "text": "Chelsea"
            }
        ]
    },
    {
        "_id": "63785f00bca96fb0c6d187e6",
        "project_id": "636bf5eb6ca8dfcaff6070c7",
        "dialogue": [
            {
                "speaker": "bot",
                "text": "The Voiceflow hotel would like to extend a warm welcome to all of our guests. Who am I speaking to?"
            },
            {
                "speaker": "human",
                "text": "Bob"
            },
            {
                "speaker": "bot",
                "text": "Nice to meet you Bob! Do you have a reservation?"
            },
            {
                "speaker": "bot",
                "text": "Do not worry about getting a reservation! You can visit our website at voiceflow.com or call our front desk at 123123123 for more information. We are available at any time."
            },
            {
                "speaker": "bot",
                "text": "entering flow `636bf5ec6ca8dfcaff6070db`"
            },
            {
                "speaker": "bot",
                "text": "Until next time! Feel free to reach out to me if you need anything."
            },
            {
                "speaker": "bot",
                "text": "exiting session - saving location/resolving stack"
            }
        ]
    }
]

console.log(transcripts[0].transcript_data.length)
console.log(totalUsersForceQuit(text_transcripts))
console.log(avgDurationTime(transcripts))
console.log(avgDurationTexts(text_transcripts))
// console.log(Date.parse("2022-11-15T02:16:42.196Z"))