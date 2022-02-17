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
        for (let x = 0; x < n; x++) {
            matrix[x] = [];
            for (let y = 0; y < n; y++) {
                matrix[x][y] = (x == y) ? 1 : 0;
            }
        }
        return matrix;
    }

    /** Clear the matrix with zeros in each entry. */
    Clear() {
        this.value = [];

        for (let x = 0; x < this.width; x++) {
            this.value[x] = [];
            for (let y = 0; y < this.height; y++) {
                this.value[x][y] = 0;
            }
        }
    }

    /** Set the entry at x,y to v. */
    SetEntry(x, y, v) {
        this.value[x][y] = v;
    }

    /** Get the entry at x,y. */
    GetEntry(x, y) {
        return this.value[x][y];
    }

    /** Fill each entry in the matrix with v. */
    Fill(v) {
        for (let x = 0; x < this.width; x++) {
            this.value[x] = [];
            for (let y = 0; y < this.height; y++) {
                this.value[x][y] = v;
            }
        }
    }
}