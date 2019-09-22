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
        const total = s % 100;
        switch (total) {
            case 0:
                return 2;
                break;
            case 1:
                return 3;
                break;
            case 2:
                return 4;
                break;
            case 3:
                return 5;
                break;
            case 4:
                return 6;
                break;
            case 5:
                return 7;
                break;
            case 6:
                return 1;
                break;
            case 7:
                return 13;
                break;
            case 8:
                return 31;
                break;
            default:
                return "วันผิด";
        }
        return s;

    }
}

// const tamnaiStoryObject = new MahaLap;

module.exports = MahaLap;