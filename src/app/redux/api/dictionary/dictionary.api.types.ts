export type WordnetDefinition = {
    word: string
    synsetOffset: number
    lexFilenum: number
    pos: string
    wCnt: number
    lemma: string
    synonyms: string[]
    lexId: string
    ptrs: WordnetDefinitionPointer[]
    gloss: string
    def: string
    exp: string[]
}

export type WordnetDefinitionPointer = {
    pointerSymbol: string
    synsetOffset: number
    pos: string
    sourceTarget: string
}
