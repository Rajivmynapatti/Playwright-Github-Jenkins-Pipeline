export class TestDataGenerator {
    static generateFirstName(): string {
        const firstNames = ["John", "Jane", "Michael", "Sarah", "David", "Emma"];
        return firstNames[Math.floor(Math.random() * firstNames.length)];
    }

    static generateLastName(): string {
        const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"];
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    }

    static generateEmail(): string {
        const timestamp = Date.now();
        const randomNum = Math.floor(Math.random() * 10000);
        return `testuser${timestamp}${randomNum}@grr.la`;
    }

    static generateUserData() {
        return {
            firstname: this.generateFirstName(),
            lastname: this.generateLastName(),
            email: this.generateEmail()
        };
    }
}
