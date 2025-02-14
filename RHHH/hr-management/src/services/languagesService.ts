export class LanguagesService {
    private languages: { id: number; name: string; status: boolean }[] = [];

    public addLanguage(name: string): { id: number; name: string; status: boolean } {
        const newLanguage = {
            id: this.languages.length + 1,
            name,
            status: true,
        };
        this.languages.push(newLanguage);
        return newLanguage;
    }

    public listLanguages(): { id: number; name: string; status: boolean }[] {
        return this.languages;
    }

    public updateLanguage(id: number, name: string, status: boolean): boolean {
        const languageIndex = this.languages.findIndex(lang => lang.id === id);
        if (languageIndex !== -1) {
            this.languages[languageIndex] = { id, name, status };
            return true;
        }
        return false;
    }

    public deleteLanguage(id: number): boolean {
        const languageIndex = this.languages.findIndex(lang => lang.id === id);
        if (languageIndex !== -1) {
            this.languages.splice(languageIndex, 1);
            return true;
        }
        return false;
    }
}