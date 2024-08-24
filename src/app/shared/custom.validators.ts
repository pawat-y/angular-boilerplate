import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class CustomValidators {
  static readonly isEmail = Validators.pattern(
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  );
}
