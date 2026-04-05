import { TestBed } from '@angular/core/testing';
import { Sobre } from './sobre';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('Sobre', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sobre],
      providers: [provideRouter([]), provideHttpClient()]
    }).compileComponents();
  });

  it('deve ser criado', () => {
    const fixture = TestBed.createComponent(Sobre);
    expect(fixture.componentInstance).toBeTruthy();
  });
});