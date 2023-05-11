import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "age",
})
export class AgePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "-";
    return (
      Math.floor(
        (new Date().getTime() - new Date(value).getTime()) / 31557600000
      ) + "Y"
    );
  }
}
