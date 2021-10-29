class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static forward = new Vector(1, 0);
  static zero = new Vector(0, 0);

  // Return this vector normalized to a length of one
  normalized() {
    var m = this.mag();
    return new Vector(this.x / m, this.y / m);
  }

  // Get the magnitude of this vector
  mag() {
    return Math.sqrt(this.sqrmag());
  }

  // Get the squared magnitude of this vector. (Faster then mag, due to not calculating the sqrt)
  sqrmag() {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
  }

  // Return a vector which is the sum of the vectors a and b
  static Add(a, b) {
    return new Vector(a.x + b.x, a.y + b.y);
  }

  // Return a vector which equals a with f added to all components
  static AddFloat(a, f) {
    return new Vector(a.x + f, a.y + f);
  }

  // Return a vector which subtracts vector b from vector a
  static Sub(a, b) {
    return new Vector(a.x - b.x, a.y - b.y);
  }

  // Return a vector which is the vectors a and b multiplied per component
  static Mult(a, b) {
    return new Vector(a.x * b.x, a.y * b.y);
  }

  // Return a vector which is the vectors a and b divided per component
  static Div(a, b) {
    return new Vector(a.x / b.x, a.y / b.y);
  }

  // Return a vector which is vector a, where each component is muliplied by s
  static Scale(a, s) {
    return new Vector(a.x * s, a.y * s);
  }

  // Return a vector which is perpendicular to the given vector v, facing clockwise in relation to v
  static PerpendicularClockwise(v) {
    return new Vector(v.y, -v.x);
  }

  // Return a vector which is perpendicular to the given vector v, facing counterclockwise in relation to v
  static PerpendicularCounterClockwise(v) {
    return new Vector(-v.y, v.x);
  }

  // Calculate the dot product of a and b
  static Dot(a, b) {
    return a.x * b.x + a.y * b.y;
  }

  // Reflects the given direction on a plane with the given normal and returns the new direction
  static Reflect(inDirection, normal) {
    inDirection = inDirection.normalized();
    normal = normal.normalized();
    return Vector.Sub(inDirection, Vector.Scale(normal, Vector.Dot(inDirection, normal) * 2)).normalized();
  }

  // Return a vector which is v, wrapped between minV and maxV
  static Wrap(v, minV, maxV) {
    return new Vector(Wrap(v.x, minV.x, maxV.x), Wrap(v.y, minV.y, maxV.y));
  }

  // Returns a random vector with the given magnitude
  static Random(magnitude) {
    return Vector.Scale(new Vector(RandomInRange(-1, 1), RandomInRange(-1, 1)).normalized(), magnitude);
  }

  // Return a vector which clamps the given vector to the length of maxMagnitude
  static Clamp(vector, maxMag) {
    if (vector.mag() > maxMag) {
      return Vector.Scale(vector.normalized(), maxMag);
    } else {
      return vector;
    }
  }

  // Return the distance bewtween the vectors a and b
  static Distance(a, b) {
    return Vector.Sub(a, b).mag();
  }

  // Return the squared distance between the vectors a and b (faster then normal distance, since we dont calculate the sqrt)
  static SqrDistance(a, b) {
    return Vector.Sub(a, b).sqrmag();
  }
}
