class MahaLap {
    static tamnaiWithDay(day) {
        switch (day) {
            case "จันทร์":
                return 2;
                break;
            case "อังคาร":
                return 3;
                break;
            case "พุธ":
                return 4;
                break;
            case "พฤหัส":
                return 5;
                break;
            case "ศุกร์":
                return 6;
                break;
            case "เสาร์":
                return 7;
                break;
            case "อาทิตย์":
                return 1;
                break;
            case "สงกรานต์":
                return 13;
                break;
            case "ฮาโลวีน":
                return 31;
                break;
            case "คริสมาสต์":
                return 25;
                break;
            default:
                return "วันผิด";
        }
    }

    static tamnaiWithStory(story) {
        const s = story.length;
        let sum = 0;
        for (let i = 1; i <= s; i++) {
            sum += i;
        }
        return sum % 100;

    }

    static tamnaiWithTime(time) {
        const randomNumber = Math.random();
        if (time === "กลางวัน") {
            if (randomNumber >= 0.5)
                return randomNumber;
            else
                return 0.5;
        } else if (time === "กลางคืน") {
            if (randomNumber < 0.5)
                return randomNumber;
            else
                return 0.5;
        }
    }

    static namo(day, story, time) {

        const resultday = this.tamnaiWithDay(day);

        const resultStory = this.tamnaiWithStory(story);

        const resultime = this.tamnaiWithTime(time);

        return (resultday + resultStory + resultime) * 10 % 1000;

    }
}

// const tamnaiStoryObject = new MahaLap;

module.exports = MahaLap;