class Matrix {
    constructor(matrixWidth, matrixHeight, internalValue) {
        this.width = matrixWidth;
        this.height = matrixHeight;

        if(internalValue == null) {
            this.value = [];
            this.Clear();
        } else {
            this.value = internalValue;
        }
    }

    /** Crate an nxn identity-matrix. */
    static CreateIdentityMatrix(n) {
        var matrix = new Matrix(n, n);
        for (let r = 0; r < n; r++) {
            matrix[r] = [];
            for (let c = 0; c < n; c++) {
                matrix[r][c] = (r == c) ? 1 : 0;
            }
        }
        return matrix;
    }

    /** Clear the matrix with zeros in each entry. */
    Clear() {
        this.value = [];

        for (let r = 0; r < this.height; r++) {
            this.value[r] = [];
            for (let c = 0; c < this.width; c++) {
                this.value[r][c] = 0;
            }
        }
    }

    /** Set the entry at x,y to v. */
    SetEntry(r, c, v) {
        this.value[r][c] = v;
    }

    /** Get the entry at x,y. */
    GetEntry(r, c) {
        return this.value[r][c];
    }

    /** Fill each entry in the matrix with v. */
    Fill(v) {
        for (let r = 0; r < this.height; r++) {
            this.value[r] = [];
            for (let c = 0; c < this.width; c++) {
                this.value[r][c] = v;
            }
        }
    }

    AddRow() {
        this.value.push([]);
        for (let c = 0; c < this.width; c++) {
            this.value[this.height][c] = 0;
        }
        this.height += 1;
    }

    AddCollumn() {
        for (let r = 0; r < this.height; r++) {
            this.value[r][this.width] = 0;
        }
        this.width += 1;
    }
}